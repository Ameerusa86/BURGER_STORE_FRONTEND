import Link from "next/link";
import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <section class="footer">
        <div class="container">
          <ul class="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
            <li>
              <div class="space-y-3">
                <Link href="" class="text-4xl font-oswald uppercase">
                  Bur<span class="text-secondaryColor">ger</span>
                </Link>

                <p class="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </li>

            <li>
              <div class="flex flex-col gap-3">
                <h3 class="text-lg uppercase font-oswald">SUPPORT</h3>
                <Link href="" class="text-xs hover:text-secondaryColor">
                  FAQ's
                </Link>
                <Link href="" class="text-xs hover:text-secondaryColor">
                  Privacy Policy
                </Link>
                <Link href="" class="text-xs hover:text-secondaryColor">
                  Term & Condition
                </Link>
                <Link href="" class="text-xs hover:text-secondaryColor">
                  Contact
                </Link>
              </div>
            </li>

            <li class="space-y-8">
              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">phone</h3>

                <p class="flex items-center gap-2 text-xs">
                  <AiFillPhone
                    className="text-lg text-secondaryColor"
                    size={25}
                  />
                  +1 000 000 0000
                </p>
              </div>

              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">email</h3>

                <p class="flex items-center gap-2 text-xs">
                  <AiOutlineMail
                    className="text-lg text-secondaryColor"
                    size={25}
                  />
                  burger.info@email.com
                </p>
              </div>
            </li>

            <li class="space-y-8">
              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">address</h3>

                <p class="flex items-center gap-2 text-xs">
                  <MdLocationPin
                    className="text-lg text-secondaryColor"
                    size={25}
                  />
                  123 Burger Street Address goes here
                </p>
              </div>

              <div class="space-y-2">
                <h3 class="text-lg uppercase font-oswald">follow us</h3>

                <div class="flex space-x-3">
                  <BsFacebook
                    size={25}
                    className="text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"
                  />
                  <BsTwitter
                    size={25}
                    className="text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"
                  />
                  <BsInstagram
                    size={25}
                    className="text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"
                  />
                </div>
              </div>
            </li>
          </ul>

          <div class="flex flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight py-5 md:flex-row md:justify-between">
            <p class="paragraph">Burger Template Kit by Ameer Hasan</p>
            <p class="paragraph">Copyright © 2023. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
