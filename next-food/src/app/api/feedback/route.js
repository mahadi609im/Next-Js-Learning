import { connect } from '@/app/_lib/dbConnect';

const feedbackCollection = connect('feedbacks');
export async function GET(req) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(req) {
  const body = await req.json();

  if (!body) {
    return Response.json({
      status: 400,
      message: 'please provide a valid data',
    });
  }

  const newData = { ...body, date: new Date().toLocaleString() };
  const result = await feedbackCollection.insertOne(newData);
  return Response.json(result);
}
