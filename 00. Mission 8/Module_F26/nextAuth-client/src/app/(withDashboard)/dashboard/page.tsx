import { authOptions } from "@/utils/authOption";

import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            User Email: {session?.user?.email}
          </h1>
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={100}
            height={100}
            className="mx-auto rounded-full mt-5"
          ></Image>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
