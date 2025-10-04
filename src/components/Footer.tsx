export default function Footer() {
  return (
    <footer className='flex items-center justify-center py-8 font-mono text-sm md:text-base'>
      <p className='text-black'>@isahecam - {new Date().getFullYear()}</p>
    </footer>
  );
}
