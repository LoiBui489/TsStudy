import Card from "@/components/card";
import Link from "next/link";

export default function ReadNotification() {
    return (
        <Card>
            <h1>Read Notification</h1>
            <Link className="ml-3 text-blue-500" href={"/dashboard"}>All Notification</Link>
        </Card>
    );
};
