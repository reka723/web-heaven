import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-10 mt-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground space-y-4 sm:space-y-0">
        {/* Brand & copyright */}
        <p>
          &copy; {new Date().getFullYear()} Heaven – The Cosmetics. All rights
          reserved.
        </p>

        {/* Documents */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <a
            href="/ASZF.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            ÁSZF
          </a>
          <a
            href="/Adatvedelmi_tajekoztato.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Adatvédelmi Tájékoztató
          </a>
          <a
            href="/Cookie.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Cookies
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61584534475615"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/heaven_the_cosmetics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Google"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@heaventhecosmetics"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Google"
          >
            <FaTiktok className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
