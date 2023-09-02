import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405,
    }
  );
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from Next.js!" });
// }
