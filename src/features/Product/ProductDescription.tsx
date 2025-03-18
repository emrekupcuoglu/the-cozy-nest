const features = [
  "Sleek black leather finish",
  "Sturdy metal legs",
  "Ergonomic design with high backrest",
  "Cushioned seat for maximum comfort",
  "Easy to clean and maintain",
  "Modern design suitable for contemporary living spaces",
  "Durable and long-lasting material",
];

function ProductDescription() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <p className="mx-auto max-w-[75ch] pb-16">
          This luxurious chair features a sleek black leather finish, providing
          both style and comfort. Its modern design is complemented by sturdy
          metal legs, making it a perfect addition to any contemporary living
          space. The chair&apos;s ergonomic design ensures maximum comfort, with
          a high backrest and cushioned seat that provide excellent support for
          long periods of sitting. Additionally, the leather material is easy to
          clean and maintain, ensuring that the chair remains in pristine
          condition for years to come. Whether you&apos;re using it in your
          living room, office, or study, this chair is sure to enhance the
          aesthetic appeal of any room while offering unparalleled comfort and
          durability.
        </p>

        <h3 className="pb-6 text-4xl">About This Item</h3>
        <ul className="flex list-none flex-col gap-6">
          {features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center gap-2">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 89 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_2)">
                    <path
                      d="M84.5192 39.6795C90.4566 43.6377 90.4566 52.3623 84.5192 56.3205L37.547 87.6353C30.9015 92.0657 22 87.3018 22 79.3148L22 16.6852C22 8.69822 30.9015 3.9343 37.547 8.36467L84.5192 39.6795Z"
                      fill="#687568"
                    />
                    <path
                      d="M76.7596 43.8397C79.7283 45.8189 79.7283 50.1811 76.7596 52.1602L15.7735 92.8177C12.4507 95.0328 8 92.6509 8 88.6574L8 7.34258C8 3.3491 12.4507 0.967152 15.7735 3.18233L76.7596 43.8397Z"
                      fill="white"
                    />
                    <path
                      d="M71.2558 45.5038C73.037 46.6913 73.037 49.3087 71.2558 50.4961L4.66411 94.8906C2.67044 96.2197 0 94.7905 0 92.3944L0 3.60555C0 1.20947 2.67044 -0.219709 4.6641 1.1094L71.2558 45.5038Z"
                      fill="#D19F3D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_2">
                      <rect width="89" height="96" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductDescription;
