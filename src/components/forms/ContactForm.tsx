import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/constants/services";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const budgetRanges = [
  "Under ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,00,000",
  "Above ₹2,00,000",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for your inquiry. Our team will contact you within 24 hours.",
      variant: "success",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Your full name"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Event Type */}
        <div className="space-y-2">
          <Label>
            Event Type <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => setValue("eventType", value)}>
            <SelectTrigger className={errors.eventType ? "border-destructive" : ""}>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.title}>
                  {service.title}
                </SelectItem>
              ))}
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.eventType && (
            <p className="text-sm text-destructive">{errors.eventType.message}</p>
          )}
        </div>

        {/* Event Date */}
        <div className="space-y-2">
          <Label htmlFor="eventDate">Event Date</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Event Location</Label>
          <Input
            id="location"
            placeholder="City/Area"
            {...register("location")}
          />
        </div>

        {/* Budget */}
        <div className="space-y-2 md:col-span-2">
          <Label>Budget Range</Label>
          <Select onValueChange={(value) => setValue("budget", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">Message / Requirements</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your event requirements, theme preferences, special requests..."
            rows={4}
            {...register("message")}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Get Free Consultation
          </>
        )}
      </Button>
    </form>
  );
}
