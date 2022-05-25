import mobile from "../images/bg-header-mobile.svg"
import desktop from "../images/bg-header-desktop.svg"

export default function Hero() {
  return (
    <>
      <section className="showcase">
        <picture>
          <source media="(min-width: 600px)" srcSet={desktop} />
          <img
            src={mobile}
            alt="static job listings app hero"
            className="w-full h-52"
          />
        </picture>
      </section>
    </>
  )
}
