import mobileImage from "./assets/images/image-product-mobile.jpg"
import desktopImage from "./assets/images/image-product-desktop.jpg"
import cartIcon from "./assets/images/icon-cart.svg"
function App() {
  return (
    <div className="bg-Cream h-screen p-4 md:p-0 flex justify-center items-center">
      <main className="flex flex-col max-w-sm md:flex-row md:max-w-xl">
      <picture>
          <source
            media="(width > 768px)"
            srcSet={desktopImage}
          />
          <img
            src={mobileImage}
            alt="Mobile image"
            className="rounded-t-md md:rounded-l-md md:rounded-t-none"
          />
        </picture>
        <article className="p-5 md:p-6  bg-White flex flex-col rounded-b-md md:rounded-r-md md:rounded-b-none gap-3 md:max-w-min">
          <h1 className="font-ff-montserrat text-Dark-grayish-blue font-semi-bold tracking-[.4rem] text-sm">PERFUME</h1>
          <h2 className="font-bold font-ff-fraunces text-3xl max-w-[20rem] md:max-w-[12rem] md:leading-8">Gabrielle Essence Eau De Parfum</h2>
          <p className="text-Dark-grayish-blue md:min-w-[15rem]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="flex gap-5 items-center mt-4">
            <p className="text-Dark-cyan text-4xl font-ff-fraunces font-bold">$149.99</p>
            <p className="line-through text-Dark-grayish-blue">$169.99</p>
          </div>

          <button className="bg-Dark-cyan text-White py-3 rounded-md mt-3 font-bold font-ff-montserrat flex items-center justify-center gap-3"><span><img src={cartIcon}/></span>Add to Cart</button>
        </article>
      </main>
    </div>
  );
}

export default App;
