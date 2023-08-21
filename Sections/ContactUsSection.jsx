import React from "react";

const ContactUsSection = () => {
  return (
    <section id="contact" class="bg-secondaryColor py-16">
      <div class="container flex flex-col gap-5 md:items-center md:flex-row">
        <div class="space-y-4 md:flex-1">
          <h2 class="section__title text-blackColor">GET EXCLUSIVE UPDATE</h2>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="flex flex-col gap-3 md:flex-row md:flex-1">
          <input
            type="email"
            placeholder="Email address"
            class="p-2 text-blackColor rounded-lg outline-none md:w-full"
          />
          <a
            href=""
            class="flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75"
          >
            <i class="fa-solid fa-paper-plane"></i>
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
