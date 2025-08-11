import {
  ShieldCheck,
  List,
  Cog,
  Cookie,
  Share2,
  Lock,
  FilePenLine,
  Mail,
  Archive,
  UserCheck,
  ShieldOff,
  Users,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl py-12 px-4 md:py-16 md:px-6">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Last updated on August 11, 2025
            </p>
          </header>

          <Card className="w-full">
            <CardContent className="p-6 md:p-8 space-y-8">
              <PolicySection icon={""} title="">
                <p>
                  Media Cook Marketing Pvt. Ltd. is committed to protect your
                  privacy and personal information in accordance with applicable
                  data protection laws.
                </p>
              </PolicySection>

              <Separator />

              <PolicySection
                icon={<List className="h-6 w-6 text-primary" />}
                title="Information We Collect"
              >
                <p>We collect information you provide when:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>
                    Registering for an account (name, email, phone number)
                  </li>
                  {/* <li>
                    Using our services (education background, work experience)
                  </li>
                  <li>
                    Applying for study abroad programs (bank details, passport
                    information)
                  </li> */}
                  <li>Communicating through our platform</li>
                </ul>
              </PolicySection>

              <PolicySection
                icon={<Cog className="h-6 w-6 text-primary" />}
                title="How We Use Your Information"
              >
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Provide and improve our services</li>
                  <li>
                    Send newsletters and marketing communications (with your
                    consent)
                  </li>
                  <li>Conduct market research</li>
                  <li>Prevent fraud and comply with legal obligations</li>
                  <li>
                    Share with educational institutions based on your interests
                  </li>
                </ul>
              </PolicySection>

              <PolicySection
                icon={<Cookie className="h-6 w-6 text-primary" />}
                title="Cookies and Tracking"
              >
                <p>
                  We use cookies and tracking technologies to improve your
                  experience. You can control cookie settings through your
                  browser, though some site features may not work if cookies are
                  disabled.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Third-Party Services"
              >
                <p>
                  We may share information with trusted service providers who
                  help deliver our services. We ensure they protect your data
                  under confidentiality agreements.
                </p>
              </PolicySection>

              <PolicySection
                icon={<Share2 className="h-6 w-6 text-primary" />}
                title="Data Sharing"
              >
                <p>
                  We do not sell your personal information. We may share it:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>With your permission</li>
                  <li>To provide requested services</li>
                  <li>With educational institutions based on your interests</li>
                  <li>When required by law or to protect rights</li>
                </ul>
              </PolicySection>

              <PolicySection
                icon={<Archive className="h-6 w-6 text-primary" />}
                title="Data Retention"
              >
                <p>
                  Your personal information is retained only as long as
                  necessary for the purposes collected, in compliance with legal
                  and contractual obligations.
                </p>
              </PolicySection>

              <PolicySection
                icon={<UserCheck className="h-6 w-6 text-primary" />}
                title="Your Rights"
              >
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                  <li>Access your personal information</li>
                  <li>Request corrections or deletion</li>
                  <li>Withdraw consent</li>
                  <li>Lodge complaints with data protection authorities</li>
                </ul>
              </PolicySection>

              <PolicySection
                icon={<Lock className="h-6 w-6 text-primary" />}
                title="Security"
              >
                <p>
                  We implement appropriate security measures to protect your
                  personal data, including physical, electronic, and procedural
                  safeguards.
                </p>
              </PolicySection>

              <PolicySection
                icon={<ShieldOff className="h-6 w-6 text-primary" />}
                title="Children's Privacy"
              >
                <p>
                  Users must be at least 16 years old (EU) or 18 years old
                  (other jurisdictions) to use our services, or use under
                  parental supervision.
                </p>
              </PolicySection>

              <PolicySection
                icon={<MessageSquare className="h-6 w-6 text-primary" />}
                title="Social Media"
              >
                <p>
                  We monitor social media channels for feedback and improvement.
                  Do not share sensitive personal information through these
                  channels.
                </p>
              </PolicySection>

              <PolicySection
                icon={<FilePenLine className="h-6 w-6 text-primary" />}
                title="Policy Updates"
              >
                <p>
                  We may update this policy from time to time. Changes become
                  effective upon posting.
                </p>
              </PolicySection>

              {/* <Separator />

              <PolicySection
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Contact Information"
              >
                <p>
                  For privacy-related questions, contact our Data Protection
                  Officer:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg text-sm">
                  <p className="font-semibold">
                    Data Protection Officer/Grievance Officer
                  </p>
                  <p>Media Cook Marketing Pvt. Ltd.</p>
                  <p>
                    Address: FLNO A-603, UTSAV HOMES, PATILNAGAR, BAVDHAN BK,
                    PUNE-411021
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:grievances@mediacook.in"
                      className="text-primary hover:underline"
                    >
                      grievances@mediacook.in
                    </a>
                  </p>
                </div>
              </PolicySection> */}

              <Separator />

              <PolicySection
                icon={<AlertTriangle className="h-6 w-6 text-primary" />}
                title="Disclaimer"
              >
                <p>
                  getdegree.online is not liable for any loss or damage due to
                  disclosure of information, credit card details, or other
                  personal information shared beyond what we request during
                  registration.
                </p>
              </PolicySection>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function PolicySection({ icon, title, children }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="prose prose-stone max-w-none dark:prose-invert text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}
