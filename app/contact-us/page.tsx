import { Metadata } from 'next'

const ContactUs = async () => {
  return (
    <main className="w-full h-screen flex justify-center items-start lg:items-center pt-16">
      <div className="2xl:w-[800px] lg:w-[750px] w-full flex flex-col p-6 bg-white lg:rounded-lg overflow-hidden gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl text-neutral-800">We would love to help</h1>
          <p className="text-neutral-600 text-base">
            Reach out and we will get in touch within 24 hours
          </p>
        </div>

        <form className="w-full flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-6 xl:gap-y-0 xl:flex-row justify-between">
            <div className="flex flex-col gap-y-2">
              <label className="text-neutral-700 text-base font-semibold">
                First Name
              </label>
              <input
                autoFocus
                type="text"
                className="input input-bordered  w-80"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-neutral-700 text-base font-semibold">
                Last Name
              </label>
              <input
                autoFocus
                type="text"
                className="input input-bordered   w-80"
              />
            </div>
          </div>

          <div className="flex w-full ">
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-neutral-700 text-base font-semibold">
                Email
              </label>
              <input
                autoFocus
                type="email"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex w-full ">
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-neutral-700 text-base font-semibold">
                Message
              </label>
              <textarea
                rows={10}
                className="input input-bordered w-full p-3 min-h-16"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success btn-block">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};
export default ContactUs;

export const metadata: Metadata = {
  title: 'contact us'
}
 