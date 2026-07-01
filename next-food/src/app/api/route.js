export const feedBack = [
  { id: 1, message: 'one' },
  { id: 2, message: 'two' },
];

export async function GET(req) {
  return Response.json({
    status: 300,
    message: 'Api create',
  });
}
