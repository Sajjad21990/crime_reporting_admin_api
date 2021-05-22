import db from "../../../utils/db";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      getProfile(req, res);
      break;

    default:
      break;
  }
};

const getProfile = async (req, res) => {
  const snapshot = await db.collection("users").get();
  console.log(snapshot.docs.map((snap) => snap.data()));

  res.send("byee");
};
