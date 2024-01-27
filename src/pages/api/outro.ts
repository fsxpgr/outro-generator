import type {NextApiRequest, NextApiResponse} from "next";
import ffmpeg1 from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';

ffmpeg.setFfmpegPath(ffmpeg1.path);

const videoOptions = {
  color: 'black',
  width: 720,
  height: Math.round(720 * (16 / 9)), // Calculate height to achieve 9:16 aspect ratio
  duration: 20
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method !== 'POST') {
    return res.status(404).json({message: "This api supports only POST method"});
  }

  const outroText = req.body.outroText
  if (!outroText) {
    console.log('outroText is empty, video will not be generated');
    return res.status(200).json(req.body);
  }

  ffmpeg(`color=black:size=${videoOptions.width}x${videoOptions.height}`)
    .inputFormat('lavfi')
    .duration(videoOptions.duration)
    .videoFilters([{
      filter: 'drawtext',
      options: {
        fontfile: './OpenSans-Light.ttf',
        text: outroText,
        fontsize: 32,
        fontcolor: '#FF00F2',
        x: '(main_w/2-text_w/2)',
        y: '(main_h/2-text_h/2)',
      }
    }, {
      filter: 'fade',
      options: {
        type: 'out',
        start_time: 4,
        duration: 0.5
      }
    }

    ])
    .output('output-outro.mp4')
    .on('end', function () {
      console.log('File has been created');
      res.status(200).json(req.body);
    })
    .on('error', function (err) {
      console.log('An error occurred: ' + err.message);
      res.status(500).json(req.body);
    })
    .run();
}
