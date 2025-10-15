import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
    return (
        <Card>
            <h1>Notification</h1>
            <Link className="ml-3 text-blue-500" href={"/dashboard/read-notification"}>Read Notification</Link>
        </Card>
    );
};
