function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Aditya Krishnakumar. Designed and
          Developed using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
