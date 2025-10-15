export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-24 m-3 shadow-lg border-solid border-2 border-black flex justify-center items-center">
            {children}
        </div>
    );
};
