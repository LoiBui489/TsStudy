import Link from "next/link";

export default function F4() {
    return (<>
        <h1>F4</h1>
        <Link className="font-semibold text-black no-underline mx-2" href="/f1/f3">F3</Link>
        <Link className="font-semibold text-black no-underline mx-2" href="/about">About</Link>
    </>);
};
