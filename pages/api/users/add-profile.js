import db from "../../../utils/db";
import moment from "moment";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      addProfile(req, res);
      break;

    default:
      break;
  }
};

const addProfile = async (req, res) => {
  console.log(req.body.uid);

  try {
    const data = await db
      .collection("users")
      .doc(req.body.uid)
      .update({
        ...req.body,
        created: moment().unix(),
      });
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err });
  }
};
