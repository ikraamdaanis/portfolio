import { useForm, ValidationError } from "@formspree/react";
import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import { Textarea } from "components/textarea";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xpwybyga");

  const errors = state.errors?.getFormErrors();

  return (
    <>
      {state.succeeded && (
        <div className="rounded-md border border-green-700 bg-green-950 px-4 py-2">
          <p className="text-sm font-medium text-green-100">
            Thanks! I'll get back to you soon 🚀
          </p>
        </div>
      )}
      {errors?.map((error, index) => (
        <div
          key={index}
          className="rounded-md border border-red-700 bg-red-950 px-4 py-2"
        >
          <p className="text-sm font-medium">{error.message}</p>
        </div>
      ))}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <Label htmlFor="name" className="text-sm font-medium">
            name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            data-lpignore="true"
            data-1p-ignore
            data-form-type="other"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-sm font-medium">
            email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            data-lpignore="true"
            data-1p-ignore
            data-form-type="other"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="message" className="text-sm font-medium">
            message
          </Label>
          <Textarea id="message" name="message" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button type="submit" disabled={state.submitting}>
          {state.submitting ? "sending..." : "send message"}
        </Button>
      </form>
    </>
  );
}
