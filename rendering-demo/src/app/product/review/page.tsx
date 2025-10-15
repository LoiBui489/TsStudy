import Product from "../page";

export default async function Review() {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return <h1>Review</h1>;

};
