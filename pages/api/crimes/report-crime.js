import db from "../../../utils/db";
import moment from "moment";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      reportCrime(req, res);
      break;

    default:
      break;
  }
};

const reportCrime = async (req, res) => {
  console.log(req.body);
  const { id } = await db.collection("crimes").add({
    ...req.body,
    created: moment().unix(),
  });
  res.status(200).json({ id });
};
