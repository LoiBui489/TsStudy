// Extend the HTML Form with a lot of features
// When become visible, the form will prefetch the loading.tsx associated with the action
// On submit, instantly redirect to the action and the form data turn to URL params
// Show the loading while data is fetching
// Display data when it is ready
// Provide progressive enhancement
import Form from 'next/form';

export default function SearchForm() {
    return (
        <Form action={"/product"} className='flex gap-2'>
            <input type="text" name="query" placeholder="Search product..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" />
            <button type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Search</button>
        </Form>
    );
};
