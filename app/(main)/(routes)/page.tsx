import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Protected routes</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
