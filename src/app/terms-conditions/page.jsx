import {
  Info,
  UserCheck,
  ClipboardEdit,
  Ban,
  Copyright,
  Shield,
  AlertTriangle,
  XOctagon,
  FilePenLine,
  Mail,
  DatabaseZap,
  Unlink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { Footer } from "@/components/layout/footer"

const termsContent = [
  {
    title: "Introduction",
    content:
      'These Terms and Conditions govern your use of getdegree.online (the "Website"), owned and operated by Media Cook Marketing Pvt. Ltd. (hereinafter referred to as "Company"). By accessing the Website, you agree to be bound by these Terms and our Privacy Policy.',
    icon: Info,
  },
  {
    title: "Eligibility",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          You must be at least 16 years old (EU) or 18 years old (other
          jurisdictions) to use our services.
        </li>
        <li>
          Users under 18 must use the platform under parental supervision.
        </li>
      </ul>
    ),
    icon: UserCheck,
  },
  {
    title: "Registration and Use",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Provide accurate and up-to-date information during registration.
        </li>
        <li>Keep your login credentials secure and confidential.</li>
        <li>Use the platform only for legitimate educational purposes.</li>
      </ul>
    ),
    icon: ClipboardEdit,
  },
  {
    title: "Prohibited Activities",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Copy, download, or distribute content without permission.</li>
        <li>Use automated tools to scrape or extract data.</li>
        <li>Attempt to gain unauthorized access to our systems.</li>
        <li>Post harmful, illegal, or inappropriate content.</li>
        <li>Impersonate others or provide false information.</li>
        <li>Use the platform for commercial purposes without consent.</li>
      </ul>
    ),
    icon: Ban,
  },
  {
    title: "Content and Intellectual Property",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>All content on the platform is protected by copyright.</li>
        <li>
          You may use materials for personal, non-commercial purposes only.
        </li>
        <li>Third-party content is provided "as is" without warranties.</li>
        <li>We reserve the right to remove inappropriate content.</li>
      </ul>
    ),
    icon: Copyright,
  },
  {
    title: "Privacy and Data Protection",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>We process personal data in accordance with our Privacy Policy.</li>
        <li>
          Educational institutions may receive your information based on your
          interests.
        </li>
        <li>
          We implement appropriate security measures to protect your data.
        </li>
        <li>
          You have rights to access, correct, or delete your personal
          information.
        </li>
      </ul>
    ),
    icon: Shield,
  },
  {
    title: "Limitations and Disclaimers",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Services are provided "as is" without warranties.</li>
        <li>
          We are not liable for indirect, consequential, or punitive damages.
        </li>
      </ul>
    ),
    icon: AlertTriangle,
  },
  {
    title: "Termination",
    content:
      "We may terminate or suspend your access to the platform at any time for violations of these Terms or for any other reason at our sole discretion.",
    icon: XOctagon,
  },
  {
    title: "Amendments",
    content:
      "We reserve the right to modify these Terms at any time. Continued use of the platform constitutes acceptance of modified Terms.",
    icon: FilePenLine,
  },
  {
    title: "Contact Information",
    content: (
      <>
        For questions or grievances, contact us at:
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:info@getdegree.online"
              className="text-primary hover:underline"
            >
              info@getdegree.online
            </a>
          </li>
          <li>
            Grievance Officer:{" "}
            <a
              href="mailto:grievances@getdegree.online"
              className="text-primary hover:underline"
            >
              grievances@getdegree.online
            </a>
          </li>
          <li>Address: [Your Company Address]</li>
        </ul>
      </>
    ),
    icon: Mail,
  },
  {
    title: "Data Protection Amendment",
    content: (
      <>
        In compliance with GDPR and applicable data protection laws:
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>
            We implement appropriate technical and organizational security
            measures.
          </li>
          <li>Personal data is processed only for specified purposes.</li>
          <li>We ensure adequate safeguards for data transfers.</li>
          <li>You have rights regarding your personal data processing.</li>
        </ul>
      </>
    ),
    icon: DatabaseZap,
  },
  {
    title: "Severability",
    content:
      "If any provision of these Terms is found to be invalid, the remaining provisions shall remain in full force and effect.",
    icon: Unlink,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow container mx-auto px-4 py-12 md:px-6 md:py-16">
        <Card className="max-w-4xl mx-auto shadow-lg dark:shadow-2xl">
          <CardHeader className="text-center pt-8 md:pt-12">
            <CardTitle className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Terms & Conditions
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Your agreement for using getdegree.online
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <div className="space-y-12">
              <Separator />
              {termsContent.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-6 md:gap-8"
                  >
                    <div className="flex-shrink-0 flex sm:flex-col items-center gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-3">
                        <Icon className="h-6 w-6" />
                      </div>
                      {index < termsContent.length - 1 && (
                        <div className="hidden sm:block w-px h-full bg-gray-200 dark:bg-gray-700 flex-grow" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-semibold tracking-tight mb-3">
                        {section.title}
                      </h2>
                      <div className="text-gray-600 dark:text-gray-400 leading-relaxed prose prose-gray dark:prose-invert max-w-none">
                        <p>{section.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
