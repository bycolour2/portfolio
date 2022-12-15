export const Contacts = () => {
  return (
    <main className="container mx-auto flex min-h-[calc(100vh-96px)] max-w-[70%] flex-col items-center justify-center gap-8 bg-white pb-20">
      <p className="text-4xl font-bold text-gray-700">
        For any questions please contact me at
      </p>
      <a
        href="mailto:ruskir7@gmail.com"
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold leading-loose text-transparent"
      >
        ruskir7@gmail.com
      </a>
    </main>
  );
};
