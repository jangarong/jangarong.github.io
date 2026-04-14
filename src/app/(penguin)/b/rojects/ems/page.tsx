

export const metadata = {
    title: 'Jan Garong [B] - Trend Micro Email Security',
    // description: 'Read my blog.',
}
import Header from '@/components/b/header'
import Image from 'next/image'

/* eslint-disable react/no-unescaped-entities */

export default function Page() {
    return (
        <div>            <Header>Trend Micro Email Security</Header>
            <div className="mt-[24px] mx-[24px] mb-[48px] min-h-[100vh]">
                <div className="mb-4">
                    Here is a compilation of product features I've worked on while I was at Trend Micro!
                </div>
                <h1 className="mb-8 title font-semibold text-2xl tracking-tighter">
                    Email Recovery
                </h1>
                <div className="flex justify-center flex-row mb-4">
                    <Image src="/assets/b/ems/0.png" alt="image" width={600} height={300} />
                </div>
                <div className="mb-4">
                    <b>Feature Doc:</b> <a href="https://docs.trendmicro.com/en-US/documentation/article/trend-micro-email-security-online-help-emailrecovery">https://docs.trendmicro.com/en-US/documentation/article/trend-micro-email-security-online-help-emailrecovery</a>
                </div>
                <div className="mb-4">
                    At Trend Micro Email Security, users can configure various policies that can secure
                    the customer's inbox. This can include Domain blocklists, IP reputation, viruses, and much more! You can
                    also configure your policies to take immediate action on what to do with targeted emails- this
                    can either be sending the email to quarantine, or deleting it outright.
                </div>
                <div className="mb-4">
                    However, there is always a chance that these emails could be false positives, or there is some
                    user error in configuring policies, which could lead to permanent data loss.
                </div>
                <div className="mb-4">
                    TMEMS' Email Recovery feature fixes this! Basically if the customer gives us permission,
                    we will restore emails that have been deleted/quarantined due to false-positives.
                </div>
                <div className="mb-4">
                    For this feature, I worked on microservices related to email storage and ingestion, and
                    updating our log pipelines to ensure emails with this feature enabled don't get deleted.
                    We also developed an internal tool that helped with performing the actual recovery part,
                    which releases emails to their intended recipient.
                </div>
                <div className="mb-4">
                    This also includes updating the Mail Tracking Logs to show to customers to support the new
                    email statuses (i.e. recovered) and an opt-in/out page the customer can access to enable
                    Email Recovery.
                </div>
            </div>
        </div>
    )
}
