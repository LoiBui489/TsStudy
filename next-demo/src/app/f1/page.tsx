import Link from "next/link";

export default function F1() {
    return (<>
        <h1>F1</h1>
        <Link className="font-semibold text-black mx-2 no-underline" href="/f1/f2">F2</Link>
        <Link className="font-semibold text-black mx-2 no-underline" href="/f1/f3">F3</Link>
        <Link className="font-semibold text-black mx-2 no-underline" href="/f1/f4">F4</Link>
    </>);
};
