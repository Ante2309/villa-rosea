import Slideshow from "./Slideshow";

// Veliki apartman – 9 slika
import v1 from "../assets/velikiap/1.jpg";
import v2 from "../assets/velikiap/2.jpg";
import v3 from "../assets/velikiap/3.jpg";
import v4 from "../assets/velikiap/4.jpg";
import v5 from "../assets/velikiap/5.jpg";
import v6 from "../assets/velikiap/6.jpg";
import v7 from "../assets/velikiap/7.jpg";
import v8 from "../assets/velikiap/8.jpg";
import v9 from "../assets/velikiap/9.jpg";

// Mali apartman – 10 slika
import m1 from "../assets/maliap/1.jpg";
import m2 from "../assets/maliap/2.jpg";
import m3 from "../assets/maliap/3.jpg";
import m4 from "../assets/maliap/4.jpg";
import m5 from "../assets/maliap/5.jpg";
import m6 from "../assets/maliap/6.jpg";
import m7 from "../assets/maliap/7.jpg";
import m8 from "../assets/maliap/8.jpg";
import m9 from "../assets/maliap/9.jpg";
import m10 from "../assets/maliap/10.jpg";

const velikiImages = [v1, v2, v3, v4, v5, v6, v7, v8, v9];
const maliImages = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];

export default function Apartments() {
  return (
    <section className="relative w-full bg-white px-6 md:px-16 mt-24">
      {/* Naslov */}
      <div className=" flex flex-col justify-center items-center space-y-10">
        <h2 className="fade-trigger text-center text-4xl md:text-5xl font-bold text-black">
          Naši Apartmani
        </h2>
        <div className="w-28 p-0.5 bg-gray-300 rounded-4xl"></div>

        {/* Wrapper */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Centrirana crta */}
          <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>

          {/* APARTMAN 1 */}
          <div className="relative flex flex-col items-center text-center">
            {/* Ogroman broj iza */}
            <div className="fade-trigger absolute -top-55 -left-17 text-[360px] font-bold text-black/5 select-none">
              1
            </div>

            {/* Slika */}
            <div className="fade-trigger relative z-10 w-full max-w-md overflow-hidden rounded-xl shadow-xl">
              <Slideshow images={velikiImages} />
            </div>

            {/* Info */}
            <div className="fade-trigger mt-8 space-y-4 max-w-md">
              <h3 className="text-3xl md:text-5xl font-semibold text-black">
                Apartman 1
              </h3>

              <p className="text-lg md:text-xl text-gray-700 min-h-[96px]">
                Prostrani apartman idealan za obitelji. Dvije spavaće sobe,
                moderna kuhinja, kupaonica i velika terasa s pogledom na borovu
                šumu i more.
              </p>

              <div className="grid grid-cols-3 justify-center text-gray-600 text-lg">
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" />
                  </svg>
                  do 9 osoba
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M64 96C81.7 96 96 110.3 96 128V352H320V224C320 206.3 334.3 192 352 192H512C565 192 608 235 608 288V512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512V448H96V512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512V128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z" />
                  </svg>
                  4 sobe
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M160 141.3C160 134 165.9 128 173.3 128C176.8 128 180.2 129.4 182.7 131.9L197.6 146.8C194 155.9 192.1 165.7 192.1 176C192.1 195.9 199.3 214 211.3 228C206 237.2 207.3 249.1 215.1 257C224.5 266.4 239.7 266.4 249 257L353 153C362.4 143.6 362.4 128.4 353 119.1C345.2 111.2 333.2 110 324 115.3C310 103.3 291.9 96.1 272 96.1C261.7 96.1 251.8 98.1 242.8 101.6L227.9 86.6C213.4 72.1 193.7 64 173.3 64C130.6 64 96 98.6 96 141.3L96 320C78.3 320 64 334.3 64 352C64 369.7 78.3 384 96 384L96 432C96 460.4 108.4 486 128 503.6L128 544C128 561.7 142.3 576 160 576C177.7 576 192 561.7 192 544L192 528L448 528L448 544C448 561.7 462.3 576 480 576C497.7 576 512 561.7 512 544L512 503.6C531.6 486 544 460.5 544 432L544 384C561.7 384 576 369.7 576 352C576 334.3 561.7 320 544 320L160 320L160 141.3z" />
                  </svg>
                  4 kupaonice
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M320 160C229.1 160 146.8 196 86.3 254.6C73.6 266.9 53.3 266.6 41.1 253.9C28.9 241.2 29.1 220.9 41.8 208.7C113.7 138.9 211.9 96 320 96C428.1 96 526.3 138.9 598.3 208.7C611 221 611.3 241.3 599 253.9C586.7 266.5 566.4 266.9 553.8 254.6C493.2 196 410.9 160 320 160zM272 496C272 469.5 293.5 448 320 448C346.5 448 368 469.5 368 496C368 522.5 346.5 544 320 544C293.5 544 272 522.5 272 496zM200 390.2C188.3 403.5 168.1 404.7 154.8 393C141.5 381.3 140.3 361.1 152 347.8C193 301.4 253.1 272 320 272C386.9 272 447 301.4 488 347.8C499.7 361.1 498.4 381.3 485.2 393C472 404.7 451.7 403.4 440 390.2C410.6 356.9 367.8 336 320 336C272.2 336 229.4 356.9 200 390.2z" />
                  </svg>
                  Wi-Fi
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M561.5 405.1C555.6 421.8 536.2 428.1 520.4 420.2L342.2 331.1L340.6 334.3L251.8 512L544 512C561.7 512 576 526.3 576 544C576 561.7 561.7 576 544 576L96 576C78.3 576 64 561.7 64 544C64 526.3 78.3 512 96 512L180.2 512L283.4 305.7L285 302.5L119.6 219.8C103.8 211.9 97.2 192.5 107.1 177.8C153 109.2 231.2 64 320 64C461.4 64 576 178.6 576 320C576 349.8 570.9 378.5 561.5 405.1z" />
                  </svg>
                  Terasa
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M552 216C552 185.1 526.9 160 496 160C465.1 160 440 185.1 440 216C440 246.9 465.1 272 496 272C526.9 272 552 246.9 552 216zM293.4 262.2L204.8 336.1C205.9 336.1 207 336 208.1 336C241.2 335.8 274.4 346.2 302.5 367.4C324.6 384 331.6 384 353.7 367.4C381.2 346.7 413.6 336.2 446.1 336C450.9 336 455.8 336.2 460.6 336.6C452.3 306.6 436.3 278.9 413.8 256.4C395.4 238 373.2 223.7 348.8 214.6L280.2 188.9C252.8 178.6 222.2 181.4 197.1 196.5L143.6 228.6C128.4 237.7 123.5 257.3 132.6 272.5C141.7 287.7 161.3 292.6 176.5 283.5L230 251.3C238.4 246.3 248.6 245.4 257.7 248.8L293.4 262.2zM403.4 444.1C424.7 428 453.3 428 474.6 444.1C493.6 458.5 516.5 472.3 541.8 477.4C568.3 482.8 596.1 478.2 622.5 458.3C633.1 450.3 635.2 435.3 627.2 424.7C619.2 414.1 604.2 412 593.6 420C578.7 431.2 565 433.1 551.3 430.3C536.4 427.3 520.4 418.4 503.5 405.7C465.1 376.7 413 376.7 374.5 405.7C350.5 423.8 333.8 432 320 432C306.2 432 289.5 423.8 265.5 405.7C227.1 376.7 175 376.7 136.5 405.7C114.9 422 95.2 431.5 77.6 431.4C68 431.3 57.7 428.4 46.4 419.9C35.8 411.9 20.8 414 12.8 424.6C4.8 435.2 7 450.3 17.6 458.3C36.7 472.7 57 479.3 77.4 479.4C111.3 479.6 141.7 462 165.5 444.1C186.8 428 215.4 428 236.7 444.1C260.9 462.4 289 480 320.1 480C351.2 480 379.2 462.3 403.5 444.1z" />
                  </svg>
                  Bazen
                </div>
                <div />
              </div>

              <div className="flex flex-col items-center mt-6">
                <div className="fade-trigger flex items-baseline">
                  <p className=" text-5xl md:text-6xl font-extrabold tracking-tight">
                    120€
                  </p>
                  <p className="text-xl font-semibold ml-1">/ noć</p>
                </div>
                <div className="w-16 h-1 bg-black mt-2 rounded-full"></div>
              </div>

              <button className="fade-trigger mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition cursor-pointer hover:-translate-y-1.5 duration-300">
                Pošalji upit
              </button>
            </div>
          </div>

          {/* APARTMAN 2 */}
          <div className=" relative flex flex-col items-center text-center">
            {/* broj iza */}
            <div className="fade-trigger absolute bottom-50 -right-17 text-[360px] font-bold text-black/5 select-none">
              2
            </div>

            {/* Slideshow */}
            <div className="fade-trigger relative w-full max-w-md overflow-hidden rounded-xl shadow-xl">
              <Slideshow images={maliImages} />
            </div>

            {/* Info */}
            <div className="mt-8 space-y-4 max-w-md">
              <h3 className="fade-trigger text-3xl md:text-5xl font-semibold text-black">
                Apartman 2
              </h3>

              <p className="fade-trigger text-lg md:text-xl text-gray-700 min-h-[96px]">
                Moderan apartman za parove ili male obitelji. Terasa, elegantan
                interijer, izlaz na bazen i potpuni mir borove šume.
              </p>

              <div className="fade-trigger grid grid-cols-3 justify-center gap-1 text-gray-600 text-lg">
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" />
                  </svg>
                  do 3 osobe
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M64 96C81.7 96 96 110.3 96 128V352H320V224C320 206.3 334.3 192 352 192H512C565 192 608 235 608 288V512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512V448H96V512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512V128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z" />
                  </svg>
                  1 soba
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M160 141.3C160 134 165.9 128 173.3 128C176.8 128 180.2 129.4 182.7 131.9L197.6 146.8C194 155.9 192.1 165.7 192.1 176C192.1 195.9 199.3 214 211.3 228C206 237.2 207.3 249.1 215.1 257C224.5 266.4 239.7 266.4 249 257L353 153C362.4 143.6 362.4 128.4 353 119.1C345.2 111.2 333.2 110 324 115.3C310 103.3 291.9 96.1 272 96.1C261.7 96.1 251.8 98.1 242.8 101.6L227.9 86.6C213.4 72.1 193.7 64 173.3 64C130.6 64 96 98.6 96 141.3L96 320C78.3 320 64 334.3 64 352C64 369.7 78.3 384 96 384L96 432C96 460.4 108.4 486 128 503.6L128 544C128 561.7 142.3 576 160 576C177.7 576 192 561.7 192 544L192 528L448 528L448 544C448 561.7 462.3 576 480 576C497.7 576 512 561.7 512 544L512 503.6C531.6 486 544 460.5 544 432L544 384C561.7 384 576 369.7 576 352C576 334.3 561.7 320 544 320L160 320L160 141.3z" />
                  </svg>
                  1 kupaonica
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M320 160C229.1 160 146.8 196 86.3 254.6C73.6 266.9 53.3 266.6 41.1 253.9C28.9 241.2 29.1 220.9 41.8 208.7C113.7 138.9 211.9 96 320 96C428.1 96 526.3 138.9 598.3 208.7C611 221 611.3 241.3 599 253.9C586.7 266.5 566.4 266.9 553.8 254.6C493.2 196 410.9 160 320 160zM272 496C272 469.5 293.5 448 320 448C346.5 448 368 469.5 368 496C368 522.5 346.5 544 320 544C293.5 544 272 522.5 272 496zM200 390.2C188.3 403.5 168.1 404.7 154.8 393C141.5 381.3 140.3 361.1 152 347.8C193 301.4 253.1 272 320 272C386.9 272 447 301.4 488 347.8C499.7 361.1 498.4 381.3 485.2 393C472 404.7 451.7 403.4 440 390.2C410.6 356.9 367.8 336 320 336C272.2 336 229.4 356.9 200 390.2z" />
                  </svg>
                  Wi-Fi
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M561.5 405.1C555.6 421.8 536.2 428.1 520.4 420.2L342.2 331.1L340.6 334.3L251.8 512L544 512C561.7 512 576 526.3 576 544C576 561.7 561.7 576 544 576L96 576C78.3 576 64 561.7 64 544C64 526.3 78.3 512 96 512L180.2 512L283.4 305.7L285 302.5L119.6 219.8C103.8 211.9 97.2 192.5 107.1 177.8C153 109.2 231.2 64 320 64C461.4 64 576 178.6 576 320C576 349.8 570.9 378.5 561.5 405.1z" />
                  </svg>
                  Terasa
                </div>
                <div className="flex justify-center items-baseline gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M552 216C552 185.1 526.9 160 496 160C465.1 160 440 185.1 440 216C440 246.9 465.1 272 496 272C526.9 272 552 246.9 552 216zM293.4 262.2L204.8 336.1C205.9 336.1 207 336 208.1 336C241.2 335.8 274.4 346.2 302.5 367.4C324.6 384 331.6 384 353.7 367.4C381.2 346.7 413.6 336.2 446.1 336C450.9 336 455.8 336.2 460.6 336.6C452.3 306.6 436.3 278.9 413.8 256.4C395.4 238 373.2 223.7 348.8 214.6L280.2 188.9C252.8 178.6 222.2 181.4 197.1 196.5L143.6 228.6C128.4 237.7 123.5 257.3 132.6 272.5C141.7 287.7 161.3 292.6 176.5 283.5L230 251.3C238.4 246.3 248.6 245.4 257.7 248.8L293.4 262.2zM403.4 444.1C424.7 428 453.3 428 474.6 444.1C493.6 458.5 516.5 472.3 541.8 477.4C568.3 482.8 596.1 478.2 622.5 458.3C633.1 450.3 635.2 435.3 627.2 424.7C619.2 414.1 604.2 412 593.6 420C578.7 431.2 565 433.1 551.3 430.3C536.4 427.3 520.4 418.4 503.5 405.7C465.1 376.7 413 376.7 374.5 405.7C350.5 423.8 333.8 432 320 432C306.2 432 289.5 423.8 265.5 405.7C227.1 376.7 175 376.7 136.5 405.7C114.9 422 95.2 431.5 77.6 431.4C68 431.3 57.7 428.4 46.4 419.9C35.8 411.9 20.8 414 12.8 424.6C4.8 435.2 7 450.3 17.6 458.3C36.7 472.7 57 479.3 77.4 479.4C111.3 479.6 141.7 462 165.5 444.1C186.8 428 215.4 428 236.7 444.1C260.9 462.4 289 480 320.1 480C351.2 480 379.2 462.3 403.5 444.1z" />
                  </svg>
                  Bazen
                </div>
              </div>

              <div className="flex flex-col items-center mt-6">
                <div className="flex items-baseline">
                  <p className="fade-trigger text-5xl md:text-6xl font-extrabold tracking-tight">
                    90€
                  </p>
                  <p className="fade-trigger text-xl font-semibold ml-1">
                    / noć
                  </p>
                </div>
                <div className="w-16 h-1 bg-black mt-2 rounded-full"></div>
              </div>

              <button className="fade-trigger mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition cursor-pointer hover:-translate-y-1.5 duration-300">
                Pošalji upit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
