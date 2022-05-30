import nc from 'next-connect';
import { sendContactEmail } from '../../utils/emailService';
const handler = nc();

handler.post(async (req, res) => {
  try {
    sendContactEmail(req.body.name, req.body.email, req.body.message);
    return res.status(200).send({
      message: `Success`,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

export default handler;
