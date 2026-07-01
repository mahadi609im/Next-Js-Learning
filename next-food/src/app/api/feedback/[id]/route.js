import { connect } from '@/app/_lib/dbConnect';
import { ObjectId } from 'mongodb';

const feedbackCollection = connect('feedbacks');
export async function GET(req, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: 'not valid id',
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);
  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: 'not deleted 24 charc id need',
    });
  }

  const query = { _id: new ObjectId(id) };

  const result = await feedbackCollection.deleteOne(query);
  return Response.json(result);
}

export async function PATCH(req, { params }) {
  const { id } = await params;

  const { message } = await req.json();

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: 'not deleted 24 charc id need',
    });
  }

  if (!message) {
    return Response.json({
      status: 400,
      message: 'not send message',
    });
  }

  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: { message },
  };

  const result = await feedbackCollection.updateOne(query, newData);
  return Response.json(result);
}
