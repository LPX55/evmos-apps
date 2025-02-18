import { useEffect, useRef, useState } from "react";

import { LinkButton } from "./LinkButton";
import { ModalTOS } from "./Modal";
import { ConfirmButton } from "../ConfirmButton";

export const TermOfServices = () => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    // Execute the hook only once
    if (localStorage.getItem("evmos-TOS") === null) {
      setShow(true);
    }
  }, []);

  const acceptTOS = () => {
    localStorage.setItem("evmos-TOS", "true");
    setShow(false);
  };

  const [isDisabled, setIsDisabled] = useState(true);
  const termsRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (termsRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
      // The scroll approximation is so close that 3 pixels difference should account all zoom ranges.
      const scrollHeightFewerThree = scrollHeight - 3;
      if (scrollTop + clientHeight >= scrollHeightFewerThree) {
        setIsDisabled(false);
      }
    }
  };

  return (
    <ModalTOS title="Evmos Terms of Services" show={show}>
      <div className="space-y-3">
        <div
          className="h-80 w-full space-y-3 overflow-y-auto border border-darkGray5 p-4 font-[IBM]"
          ref={termsRef}
          onScroll={onScroll}
        >
          <p>
            <i>Last Updated: April 12th, 2022</i>
          </p>
          <p>
            Please read these terms carefully and click the button at the bottom
            to acknowledge that you have read and accepted the terms and
            conditions.
          </p>

          <p>
            <b>1. Introduction</b>{" "}
          </p>
          <p>
            Welcome to Evmos, a Layer 1 blockchain network maintained by a
            decentralized team of developers that is deployed on the Cosmos
            blockchain (“Evmos”, “we”, “us”, or “our”). Tharsis Labs Ltd.
            developed the initial code for Evmos, however it does not own or
            control the Evmos protocol, which is run by a decentralized
            validator set. These Terms of Service (“Terms”) govern your access
            to and use of the Evmos website(s) and our APIs (the “Website”), and
            any other software, tools, features, or functionalities provided on
            or in connection with our services; including without limitation
            using our services to view, explore Evmos and use our tools, at your
            own discretion, to connect directly with others to purchase, sell,
            or transfer Evmos tokens on public blockchains (collectively, the
            “Service”). “Evmos tokens” in these Terms means a utility or
            governance token or similar digital item implemented on a blockchain
            (such as the Evmos or Cosmos blockchain), which uses smart contracts
            to link to or otherwise be associated with certain content or data.
            For purposes of these Terms, “user”, “you”, and “your” means you as
            the user of the Service. If you use the Service on behalf of a
            company or other entity then “you” includes you and that entity, and
            you represent and warrant that (a) you are an authorized
            representative of the entity with the authority to bind the entity
            to these Terms, and (b) you agree to these Terms on the entity’s
            behalf. PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN
            IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. AS OUTLINED IN
            SECTION 15 BELOW, THEY INCLUDE A MANDATORY ARBITRATION AGREEMENT AND
            CLASS ACTION WAIVER WHICH (WITH LIMITED EXCEPTIONS) REQUIRE ANY
            DISPUTES BETWEEN US TO BE RESOLVED THROUGH INDIVIDUAL ARBITRATION
            RATHER THAN BY A JUDGE OR JURY IN COURT. BY CLICKING TO ACCEPT
            AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND
            ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT
            AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE. Evmos
            is not a wallet provider, exchange, broker, financial institution,
            or creditor. Evmos provides a peer-to-peer web3 service that helps
            users discover and directly interact with each other and tokens
            available on public blockchains. We do not have custody or control
            over the tokens or blockchains you are interacting with, and we do
            not execute or effectuate purchases, transfers, or sales of tokens.
            To use our Service, you must use a third-party wallet which allows
            you to engage in transactions on blockchains. Evmos is not party to
            any agreement between any users. You bear full responsibility for
            verifying the identity, legitimacy, and authenticity of tokens that
            you acquire from third-parties and we make no claims about the
            identity, legitimacy, functionality, or authenticity of users or
            tokens (and any content associated with such tokens) visible on the
            Service. Because we have a growing number of services, we sometimes
            need to provide additional terms for specific services (and such
            services are deemed part of the “Service” hereunder and shall also
            be subject to these Terms). Those additional terms and conditions,
            which are available with the relevant service, then become part of
            your agreement with us if you use those services. In the event of a
            conflict between these Terms and any additional applicable terms we
            may provide for a specific service, such additional terms shall
            control for that specific service. Evmos reserves the right to
            change or modify these Terms at any time and in our sole discretion.
            If we make material changes to these Terms, we will use reasonable
            efforts to provide notice of such changes, such as by providing
            notice through the Service or updating the “Last Updated” date at
            the beginning of these Terms. By continuing to access or use the
            Service, you confirm your acceptance of the revised Terms and all
            the terms incorporated therein by reference effective as of the date
            these Terms are updated. It is your sole responsibility to review
            the Terms from time to time to view such changes and to ensure that
            you understand the terms and conditions that apply when you access
            or use the Service.
          </p>
          <p>
            <b>2. Accessing the Service</b>
          </p>
          <p>
            Your blockchain address functions as your identity on Evmos.
            Accordingly, you will need a blockchain address and a third-party
            wallet to access the Service. Your account on the service
            (“Account”) will be associated with your blockchain address. Your
            Account on Evmos will be associated with your linked blockchain
            address and display the tokens for that blockchain address (and, if
            applicable, any content associated with such tokens). By using your
            wallet in connection with the Service, you agree that you are using
            that wallet under the terms and conditions of the applicable
            provider of the wallet. Wallets are not operated by, maintained by,
            or affiliated with Evmos, and Evmos does not have custody or control
            over the contents of your wallet and has no ability to retrieve or
            transfer its contents. Evmos accepts no responsibility for, or
            liability to you, in connection with your use of a wallet and makes
            no representations or warranties regarding how the Service will
            operate with any specific wallet. You are solely responsible for
            keeping your wallet secure and you should never share your wallet
            credentials or seed phrase with anyone. If you discover an issue
            related to your wallet, please contact your wallet provider.
            Likewise, you are solely responsible for your Account and any
            associated wallet, and we are not liable for any acts or omissions
            by you in connection with your Account or as a result of your
            Account or wallet being compromised. You agree to immediately notify
            us if you discover or otherwise suspect any security issues related
            to the Service or your Account to legal@thars.is. You also represent
            and warrant that you will comply with all applicable laws (e.g.,
            local, state, federal and other laws) when using the Service.
            Without limiting the foregoing, by using the Service, you represent
            and warrant that: (a) you are not located in a country that is
            subject to a U.S. Government embargo; and (b) you have not been
            identified as a Specially Designated National or placed on any U.S.
            Government list of prohibited, sanctioned, or restricted parties. If
            you access or use the Service outside the United States, you are
            solely responsible for ensuring that your access and use of the
            Service in such country, territory or jurisdiction does not violate
            any applicable laws. Evmos may require you to provide additional
            information and documents in certain circumstances, such as at the
            request of any government authority, as any applicable law or
            regulation dictates, or to investigate a potential violation of
            these Terms. In such cases, Evmos in its sole discretion, may block
            your ability to access the Service until such additional information
            and documents are processed by Evmos. If you do not provide complete
            and accurate information in response to such a request, Evmos may
            refuse to restore your access to the Service. Your access and use of
            the Service may be interrupted from time to time for any of several
            reasons, including, without limitation, the malfunction of
            equipment, periodic updating, maintenance, or repair of the Service
            or other actions that Evmos, in its sole discretion, may elect to
            take. We require all users to be at least 18 years old. If you are
            at least 13 years old but under 18 years old, you may only use Evmos
            through a parent or guardian’s Account and with their approval and
            oversight. That account holder is responsible for your actions using
            the Account. It is prohibited to use our Service if you are under 13
            years old.
          </p>
          <p>
            <b>3. Ownership</b>
          </p>
          <p>
            The Service, including its “look and feel” (e.g., text, graphics,
            images, logos, page headers, button icons, and scripts), proprietary
            content, information and other materials, and all content and other
            materials contained therein, including, without limitation, the
            Evmos brands, logo and all designs, text, graphics, pictures, data,
            software, sound files, other files, and the selection and
            arrangement thereof are the proprietary property of or our
            affiliates, licensors, or users, as applicable, and you agree not to
            take any action(s) inconsistent with such ownership interests. We
            and our affiliates, licensors, and users, as applicable, reserve all
            rights in connection with the Service and its content, including,
            without limitation, the exclusive right to create derivative works.
            Evmos’s name, logo, trademarks, and any Evmos product or service
            names, designs, logos, and slogans are the intellectual property of
            Evmos or our affiliates or licensors and may not be copied,
            imitated, or used, in whole or in part, without our prior written
            permission in each instance. You may not use any metatags or other
            “hidden text” utilizing “Evmos” or any other name, trademark or
            product or service name of Evmos or our affiliates or licensors
            without our prior written permission. In addition, the “look and
            feel” of the Service constitutes the service mark, trademark, or
            trade dress of Evmos and may not be copied, imitated or used, in
            whole or in part, without our prior written permission. All other
            third-party trademarks, registered trademarks, and product names
            mentioned on the Service or contained in the content linked to or
            associated with any tokens displayed on the Service are the property
            of their respective owners and may not be copied, imitated, or used,
            in whole or in part, without the permission of the applicable
            intellectual property rights holder. Reference to any products,
            services, processes or other information by name, trademark,
            manufacturer, supplier or otherwise does not constitute or imply
            endorsement, sponsorship, or recommendation by Evmos.
          </p>
          <p>
            <b>4. License</b>
          </p>
          <p>
            to Access and Use Our Service and Content You are hereby granted a
            limited, revocable, nonexclusive, nontransferable, nonsublicensable,
            and personal license to access and use the Service provided,
            however, that such license is subject to your compliance with these
            Terms. If any software, content, or other materials owned by,
            controlled by, or licensed to us are distributed or made available
            to you as part of your use of the Service, we hereby grant you a
            non-commercial, personal, non-assignable, non-sublicensable,
            non-transferrable, and non-exclusive right and license to access and
            display such software, content, and materials provided to you as
            part of the Service (and right to download a single copy of the
            Website onto your applicable equipment or device), in each case for
            the sole purpose of enabling you to use the Service as permitted by
            these Terms, provided that your license in any content linked to or
            associated with any tokens is solely as set forth by the applicable
            seller or creator of such token.
          </p>
          <p>
            <b>5. License to Access and Use Service and Content</b>
          </p>
          <p>
            As a peer-to-peer web3 service, Evmos helps you deploy Ethereum
            Virtual Machines to the Cosmos Hub and interact with different
            blockchains. Evmos or its affiliates does not make any
            representations or warranties about this third-party content visible
            through our Service, including any content associated with tokens
            displayed on the Service, and you bear responsibility for verifying
            the legitimacy, authenticity, and legality of tokens that you
            acquire from third-parties. We also cannot guarantee that any tokens
            visible on Evmos will always remain visible and/or available to be
            bought, sold, or transferred. The Service may also contain links or
            functionality to access or use third-party websites (“Third-Party
            Websites”) and applications (“Third-Party Applications”), or
            otherwise display, include, or make available content, data,
            information, services, applications, or materials from third parties
            (“Third-Party Materials”). When you click on a link to, or access
            and use, a Third-Party Website or Third-Party Application, though we
            may not warn you that you have left our Service, you are subject to
            the terms and conditions (including privacy policies) of another
            website or destination. Such Third-Party Websites, Third-Party
            Applications, and Third-Party Materials are not under the control of
            Evmos, and may be “open” applications for which no recourse is
            possible. Evmos and its affiliates are not responsible or liable for
            any Third-Party Websites, Third-Party Applications, and Third-Party
            Materials. Evmos provides links to these Third-Party Websites and
            Third-Party Applications only as a convenience and does not review,
            approve, monitor, endorse, warrant, or make any representations with
            respect to Third-Party Websites or Third-Party Applications, or
            their products or services or associated Third-Party Materials. You
            use all links in Third-Party Websites, Third-Party Applications, and
            Third-Party Materials at your own risk.
          </p>
          <p>
            <b>6. User Conduct</b>{" "}
          </p>
          <p>
            To protect the Evmos community and comply with our legal
            obligations, we reserve the right to act, with or without advance
            notice, if we believe you have violated these Terms. This may
            include removing your access to the Service; disabling your ability
            to access our Service; and/or other actions. You agree that you will
            not violate any law, contract, intellectual property, or other
            third-party right, and that you are solely responsible for your
            conduct and content, while accessing or using the Service. You also
            agree that you will not:
          </p>
          <ul>
            <li>
              Use or attempt to use another user’s Account without authorization
              from such user;
            </li>
            <li>Pose as another person or entity;</li>
            <li>
              Claim an Evmos username for the purpose of reselling it or
              otherwise engage in name squatting; Access the Service from a
              different blockchain address if we’ve blocked any of your other
              blockchain addresses from accessing the Service, unless you have
              our written permission first;
            </li>
            <li>Distribute spam;</li>
            <li>
              Use the Service – including through disseminating any software or
              interacting with any API – that could damage, disable, overburden,
              or impair the functioning of the Service in any manner;
            </li>
            <li>
              Bypass or ignore instructions that control access to the Service,
              including attempting to circumvent any rate limiting systems by
              using multiple API keys, directing traffic through multiple IP
              addresses, or otherwise obfuscating the source of traffic you send
              to Evmos;
            </li>
            <li>
              Use any data mining, robot, spider, crawler, scraper, script,
              browser extension, offline reader, or other automated means or
              interface not authorized by us to access the Service, extract
              data, or otherwise interfere with or modify the rendering of
              Service pages or functionality;
            </li>
            <li>
              Reverse engineer, duplicate, decompile, disassemble, or decode any
              aspect of the Service, or do anything that might discover source
              code or bypass or circumvent measures employed to prevent or limit
              access to any service, area, or code of the Service;
            </li>
            <li>
              Sell or resell the Service or attempt to circumvent any Evmos fee
              systems;
            </li>
            <li>
              Engage in behaviors that have the intention or the effect of
              artificially causing an item or collection to appear at the top of
              search results, or artificially increasing view counts, favorites,
              or other metrics that Evmos might use to sort search results;
            </li>
            <li>
              Use the Service or data collected from our Service for any
              advertising or direct marketing activity (including without
              limitation, email marketing, SMS marketing, and telemarketing);
            </li>
            <li>
              Use the Service for money laundering, terrorist financing, or
              other illicit finance;
            </li>
            <li>
              Use the Service from a country sanctioned by the government of the
              United States or to facilitate transactions involving individuals
              sanctioned by the government of the United States or located in
              sanctioned countries;
            </li>
            <li>
              Use the Service to carry out any financial activities subject to
              registration or licensing, including but not limited to creating,
              selling, or buying securities, commodities, options, or debt
              instruments;
            </li>
            <li>
              Use the Service to engage in price manipulation, fraud, or other
              deceptive, misleading, or manipulative activity;
            </li>
            <li>
              Use the Service to buy, sell, or transfer stolen items,
              fraudulently obtained items, items taken without authorization,
              and/or any other illegally obtained items;
            </li>
            <li>
              Infringe or violate the intellectual property rights or any other
              rights of others; Create or display illegal or harmful content,
              such as content that may involve child sexual exploitation; Create
              or display NFTs or other items that promote suicide or self-harm,
              incites hate or violence against others, or doxes another
              individual;
            </li>
            <li>
              Use the Service for any illegal or unauthorized purpose, including
              creating or displaying illegal content, such as content that may
              involve child sexual exploitation, or encouraging or promoting any
              activity that violates the Terms of Service; or
            </li>
            <li>
              Use the Service in any manner that could interfere with, disrupt,
              negatively affect or inhibit other users from fully enjoying the
              Service.
            </li>
          </ul>
          <p>
            We might allow users to post NSFW content, but that content and
            other associated material is subject to being marked NSFW and may be
            handled differently than non-NSFW content in navigation menus and
            search results.
          </p>
          <p>
            <b>7. Intellectual Property Rights</b>{" "}
          </p>
          <p>
            You are solely responsible for your use of the Service and for any
            information you provide, including compliance with applicable laws,
            rules, and regulations, as well as these Terms, including the User
            Conduct requirements outlined above. By using the Service in
            conjunction with creating, submitting, posting, promoting, or
            displaying content, or by complying with Evmos’s metadata standards
            in your metadata API responses, you grant us a worldwide,
            non-exclusive, sublicensable, royalty-free license to use, copy,
            modify, and display any content, including but not limited to text,
            materials, images, files, communications, comments, feedback,
            suggestions, ideas, concepts, questions, data, or otherwise, that
            you submit or post on or through the Service for our current and
            future business purposes, including to provide, promote, and improve
            the Service. Evmos does not claim that submitting, posting, or
            displaying this content on or through the Service gives Evmos any
            ownership of the content. We&apos;re not saying we own it, but we
            might use it for marketing/promotional purposes. You represent and
            warrant that you have, or have obtained, all rights, licenses,
            consents, permissions, power and/or authority necessary to grant the
            rights granted herein for any content that you create, submit, post,
            promote, or display on or through the Service. You represent and
            warrant that such content does not contain material subject to
            copyright, trademark, publicity rights, or other intellectual
            property rights, unless you have necessary permission or are
            otherwise legally entitled to post the material and to grant Evmos
            the license described above, and that the content does not violate
            any laws. Evmos will take down works in response to Digital
            Millennium Copyright Act (“DMCA”) takedown notices and/or other
            intellectual property infringement claims and will terminate a
            user&apos;s access to the Service if the user is determined to be a
            repeat infringer. If you believe that your content has been copied
            in a way that constitutes copyright or trademark infringement, or
            violates your publicity or other intellectual property rights,
            please submit written notice to legal@thars.is. For us to process
            your infringement claim regarding content on the Service, you must
            be the rightsholder or someone authorized to act on behalf of the
            rightsholder. Your notice must include:
          </p>
          <ul>
            <li>
              Identification of the copyrighted work(s), trademark, publicity
              rights, or other intellectual property rights that you claim is
              being infringed;
            </li>
            <li>
              Identification of the allegedly infringing material that is
              requested to be removed, including a description of the specific
              location (i.e., URLs) on the Service of the material claimed to be
              infringing, so that we may locate the material;
            </li>
            <li>
              Your contact information – at a minimum, your full legal name (not
              pseudonym) and email address; A declaration that contains all of
              the following:
            </li>
            <li>
              A statement that you have a good faith belief that use of the
              material in the manner complained of is not authorized by the
              intellectual property rights owner, its agent, or the law;
            </li>
            <li>
              A statement that the information in the notice is accurate; and
            </li>
            <li>
              A statement under penalty of perjury that you are authorized to
              act on behalf of the intellectual property owner of the
              intellectual property that is allegedly being infringed.
            </li>
            <li>
              Your physical or electronic signature (of your full legal name).
            </li>
          </ul>
          <p>
            Please note that we will forward your notice of intellectual
            property infringement, including your contact information, to the
            party who will have their content removed so they understand why it
            is no longer available on Evmos and can also contact you to resolve
            any dispute.
          </p>
          <p>
            <b>8. Communication Preferences</b>{" "}
          </p>
          <p>
            By creating an Account, you consent to receive electronic
            communications from Evmos (e.g., via email, push notification, text
            messages, or other types of messages).
          </p>
          <p>
            <b>9. Indemnification</b>{" "}
          </p>
          <p>
            By agreeing to these Terms and accessing the Service, you agree, to
            the fullest extent permitted by applicable law, to indemnify,
            defend, and hold harmless Tharsis Labs Ltd., Evmos Foundation, and
            our respective past, present, and future employees, officers,
            directors, contractors, consultants, equity holders, suppliers,
            vendors, service providers, parent companies, subsidiaries,
            affiliates, agents, representatives, predecessors, successors,
            lawyers, accountants, insurers, and assigns (individually and
            collectively, the “Evmos Parties”), from and against all actual or
            alleged claims, damages, awards, judgments, losses, liabilities,
            obligations, penalties, interest, fees, expenses (including, without
            limitation, attorneys’ fees and expenses), and costs (including,
            without limitation, court costs, costs of settlement, and costs of
            pursuing indemnification and insurance), of every kind and nature
            whatsoever, whether known or unknown, foreseen or unforeseen,
            matured or unmatured, or suspected or unsuspected, in law or equity,
            whether in tort, contract, or otherwise (collectively, “Claims”),
            including, but not limited to, damages to property or personal
            injury, that are caused by, arise out of or are related to (a) your
            use or misuse of the Service or its content, (b) any Feedback you
            provide, (c) your violation or breach of any term of these Terms or
            applicable law, and (d) your violation of the rights of or
            obligations to a third party, including another user or third-party,
            and (e) your negligence or willful misconduct. You agree to promptly
            notify Evmos of any Claims and cooperate with the Evmos Parties in
            defending such Claims. You further agree that the Evmos Parties
            shall have control of the defense or settlement of any Claims. THIS
            INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF, ANY OTHER
            INDEMNITIES SET FORTH IN A WRITTEN AGREEMENT BETWEEN YOU AND EVMOS.
          </p>
          <p>
            <b>10. Disclaimers</b>{" "}
          </p>
          <p>
            YOUR ACCESS TO AND USE OF THE SERVICE IS AT YOUR OWN RISK. YOU
            UNDERSTAND AND AGREE THAT THE SERVICE IS PROVIDED ON AN “AS IS” AND
            “AS AVAILABLE” BASIS AND EVMOS PARTIES EXPRESSLY DISCLAIM WARRANTIES
            OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. EVMOS PARTIES
            MAKE NO WARRANTY OR REPRESENTATION AND DISCLAIM ALL RESPONSIBILITY
            FOR WHETHER THE SERVICE: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL
            BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE
            BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE.
            EVMOS PARTIES DISCLAIM ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS
            OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR
            CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            TITLE AND NON-INFRINGEMENT. EVMOS PARTIES WILL NOT BE LIABLE FOR ANY
            LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON
            MATERIAL OR INFORMATION, CONTAINED ON THE SERVICE. WHILE EVMOS
            ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE SERVICE SAFE, EVMOS
            PARTIES CANNOT AND DOES NOT REPRESENT OR WARRANT THAT THE SERVICE,
            CONTENT, ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT
            GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. NO
            ADVICE OR INFORMATION, WHETHER ORAL OR OBTAINED FROM THE EVMOS
            PARTIES OR THROUGH THE SERVICE, WILL CREATE ANY WARRANTY OR
            REPRESENTATION NOT EXPRESSLY MADE HEREIN. YOU ACCEPT THE INHERENT
            SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE
            INTERNET AND WILL NOT HOLD EVMOS PARTIES RESPONSIBLE FOR ANY BREACH
            OF SECURITY. EVMOS PARTIES WILL NOT BE RESPONSIBLE OR LIABLE TO YOU
            FOR ANY LOSS AND TAKE NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE
            TO YOU FOR, ANY USE OF NFTS, CONTENT, AND/OR CONTENT LINKED TO OR
            ASSOCIATED WITH TOKEN TRANSACTIONS, INCLUDING BUT NOT LIMITED TO ANY
            LOSSES, DAMAGES, OR CLAIMS ARISING FROM: (A) USER ERROR, INCORRECTLY
            CONSTRUCTED TRANSACTIONS, OR MISTYPED ADDRESSES; (B) SERVER FAILURE
            OR DATA LOSS; (C) UNAUTHORIZED ACCESS OR USE; (D) ANY UNAUTHORIZED
            THIRD-PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF
            VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE
            SERVICE OR YOU. YOU AGREE EVMOS PARTIES CANNOT AFFECT OR OTHERWISE
            CONTROL THE TRANSFER OF TITLE OR RIGHT IN ANY TOKENS. YOU AGREE THAT
            EVMOS PARTIES ARE NOT RESPONSIBLE OR LIABLE FOR ANY SUSTAINED LOSSES
            OR INJURY DUE TO VULNERABILITY OR ANY KIND OF FAILURE, ABNORMAL
            BEHAVIOR OF SOFTWARE (E.G., WALLET, SMART CONTRACT), BLOCKCHAINS OR
            ANY OTHER FEATURES OF THE SERVICE. NO EVMOS PARTY IS RESPONSIBLE FOR
            LOSSES OR INJURY DUE TO LATE REPORTS BY DEVELOPERS OR
            REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE
            BLOCKCHAIN, INCLUDING FORKS, TECHNICAL NODE ISSUES OR ANY OTHER
            ISSUES HAVING LOSSES OR INJURY AS A RESULT. Some jurisdictions do
            not allow the exclusion of implied warranties in contracts with
            consumers, so the above exclusion may not apply to you.
          </p>
          <p>
            <b>11. Assumption of Risk</b>{" "}
          </p>
          <p>
            You accept and acknowledge: The value of digital assets including
            tokens is subjective. Prices of tokens are subject to volatility and
            fluctuations in the price. You acknowledge that you fully understand
            this subjectivity and volatility and that you may lose money using
            the Service. A lack of use or public interest in the creation and
            development of distributed ecosystems could negatively impact the
            development of those ecosystems and related applications and could
            therefore also negatively impact the potential utility of tokens.
            The regulatory regime governing blockchain technologies,
            non-fungible tokens, cryptocurrency, and other crypto-based items is
            uncertain, and new regulations or policies may materially adversely
            affect the development of the Service and the utility of tokens. You
            are solely responsible for determining what, if any, taxes apply to
            your transactions. Evmos is not responsible for determining the
            taxes that apply to your use of the Service, including regarding
            tokens. There are risks associated with digital assets furnished by
            third parties through peer-to-peer transactions, including but not
            limited to, the risk of purchasing counterfeit items, mislabeled
            items, items that are vulnerable to metadata decay, items on smart
            contracts with bugs, and items that may become untransferable. You
            represent and warrant that you have done sufficient research before
            making any decisions to sell, obtain, transfer, or otherwise
            interact with the Service. We do not control the public blockchains
            that you are interacting with, and we do not control certain smart
            contracts and protocols that may be integral to your ability to
            complete transactions on these public blockchains. Additionally,
            blockchain transactions are irreversible and Evmos has no ability to
            reverse any transactions on the blockchain. There are risks
            associated with using Internet and blockchain based products,
            including, but not limited to, the risk associated with hardware,
            software, and Internet connections, the risk of malicious software
            introduction, and the risk that third parties may obtain
            unauthorized access to your third-party wallet or Account. You
            accept and acknowledge that Evmos will not be responsible for any
            communication failures, disruptions, errors, distortions or delays
            you may experience when using the Service or any Blockchain network,
            however caused. The Service might rely on third-party platforms,
            developers, and/or vendors. If we are unable to maintain a good
            relationship with such platform providers, developers, and/or
            vendors; if the terms and conditions or pricing of such third
            parties change; if we violate or cannot comply with the terms and
            conditions of such third parties; or if any of such third parties
            loses market share or falls out of favor or is unavailable for a
            prolonged period of time, access to and use of the Service will
            suffer. Under no circumstances shall the inability to use the
            Service in conjunction with the purchase, sale, or transfer of items
            available on any blockchains serve as grounds for a claim against
            Evmos. If you have a dispute with one or more users, YOU RELEASE
            EVMOS PARTIES FROM CLAIMS, DEMANDS, AND DAMAGES OF EVERY KIND AND
            NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED
            WITH SUCH DISPUTES. IN ENTERING INTO THIS RELEASE, YOU EXPRESSLY
            WAIVE ANY PROTECTIONS (WHETHER STATUTORY OR OTHERWISE) THAT WOULD
            OTHERWISE LIMIT THE COVERAGE OF THIS RELEASE TO INCLUDE THOSE CLAIMS
            WHICH YOU MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOR AT THE TIME OF
            AGREEING TO THIS RELEASE.
          </p>
          <p>
            <b>12. Limitation of Liability</b>{" "}
          </p>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AGREE THAT IN NO EVENT
            WILL EVMOS PARTIES OR ITS SERVICE PROVIDERS (I.E. HOSTING SERVICES)
            BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY
            INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
            DAMAGES ARISING FROM THESE TERMS OR THE SERVICE, PRODUCTS OR
            THIRD-PARTY SITES AND PRODUCTS, OR FOR ANY DAMAGES RELATED TO LOSS
            OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
            SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, AND WHETHER
            CAUSED BY STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE), BREACH OF
            CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF EVMOS
            PARTIES OR ITS SERVICE PROVIDERS HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES; OR (B) FOR ANY OTHER CLAIM, DEMAND, OR
            DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION
            WITH THESE TERMS OF THE DELIVERY, USE, OR PERFORMANCE OF THE
            SERVICE. ACCESS TO, AND USE OF, THE SERVICE, PRODUCTS OR THIRD-PARTY
            SITES, AND PRODUCTS ARE AT YOUR OWN DISCRETION AND RISK, AND YOU
            WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR
            MOBILE DEVICE OR LOSS OF DATA RESULTING THEREFROM. NOTWITHSTANDING
            ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL THE
            MAXIMUM AGGREGATE LIABILITY OF EVMOS PARTIES ARISING OUT OF OR IN
            ANY WAY RELATED TO THESE TERMS, THE ACCESS TO AND USE OF THE
            SERVICE, CONTENT, OR ANY EVMOS PRODUCTS OR SERVICES EXCEED THE
            GREATER OF (A) $100 OR (B) THE AMOUNT RECEIVED BY EVMOS FOR ITS
            SERVICE DIRECTLY RELATING TO THE ITEMS THAT ARE THE SUBJECT OF THE
            CLAIM. THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED
            REMEDY FAILS OF ITS ESSENTIAL PURPOSE. Some jurisdictions do not
            allow the exclusion or limitation of incidental or consequential
            damages, so the above limitation or exclusion may not apply to you.
            Some jurisdictions also limit disclaimers or limitations of
            liability for personal injury from consumer products, so this
            limitation may not apply to personal injury claims.
          </p>
          <p>
            <b>13. Privacy Policy</b>{" "}
          </p>
          <p>
            When you use the Service, the only information we collect from you
            is your blockchain wallet address, completed transaction hashes, and
            token identifiers. We do not collect any personal information from
            you. We do, however, use third-party services, which may receive
            your publicly available personal information. We do not take
            responsibility for any information you make public on the Service,
            the Cosmos blockchain, or any other blockchain by taking actions
            through the Evmos interface.
          </p>
          <p>
            <b>14. Modifications to the Service</b>{" "}
          </p>
          <p>
            You agree that Evmos reserves the right in our sole discretion to
            modify, suspend, or discontinue, temporarily or permanently, the
            Service (or any features or parts thereof) at any time and without
            liability as a result. You agree that such circumstances do not give
            rise to a breach of this Agreement. You agree that to the extent, if
            any, that such circumstances present a claim against Evmos, that any
            such claim is outside the limited scope of liability set forth in
            this Agreement.
          </p>
          <p>
            <b>15. Dispute Resolution</b>
          </p>
          <p>
            Arbitration Dispute Resolution. Please read the following
            arbitration agreement in this Section (“Arbitration Agreement”)
            carefully. It requires you to arbitrate disputes with Evmos Parties
            and limits the way you can seek relief from us. This section does
            not govern disputes between users or between users and third
            parties. Evmos does not provide dispute resolution services for such
            disagreements and the parties must resolve those disputes directly.
            Applicability of Arbitration Agreement. You agree that any dispute,
            controversy, or claim relating in any way to your access or use of
            the Service, or to any aspect of your relationship with Evmos, will
            be resolved by binding arbitration, rather than in court, including
            threshold questions of the arbitrability of such dispute,
            controversy, or claim except that (1) you or Evmos may assert claims
            in small claims court, but only if the claims qualify, the claims
            remain only in such court, and the claims remain on an individual,
            non-representative, and non-class basis; and (2) you or Evmos
            Parties may seek injunctive or equitable relief in a court of proper
            jurisdiction if the claim relates to intellectual property
            infringement or other misuse of intellectual property rights.
            Dispute resolution process. You and Evmos Parties both agree to
            engage in good-faith efforts to resolve disputes prior to either
            party initiating an arbitration, small claims court proceeding, or
            equitable relief for intellectual property infringement. You must
            initiate this dispute resolution process by sending a letter
            describing the nature of your claim and desired resolution to Evmos
            (legal@thars.is). Both parties agree to meet and confer personally,
            by telephone, or by videoconference (hereinafter “Conference”) to
            discuss the dispute and attempt in good faith to reach a mutually
            beneficial outcome that avoids the expenses of arbitration or, where
            applicable, litigation. If you are represented by counsel, your
            counsel may participate in the Conference as well, but you agree to
            fully participate in the Conference. Likewise, if Evmos is
            represented by counsel, its counsel may participate in the
            Conference as well, but Evmos agrees to have a company
            representative fully participate in the Conference. The statute of
            limitations and any filing fee deadlines shall be tolled while the
            parties engage in the informal dispute resolution process and
            Conference required by this paragraph. If the parties do not reach
            agreement to resolve the dispute within thirty (30) days after
            initiation of this dispute resolution process, either party may
            commence arbitration, file an action in small claims court, or file
            a claim for injunctive or equitable relief in a court of proper
            jurisdiction for matters relating to intellectual property
            infringement, if the claims qualify. Arbitration Rules and Forum.
            The U.S. Federal Arbitration Act governs the interpretation and
            enforcement of this Arbitration Agreement. To begin an arbitration
            proceeding after participating in the dispute resolution process,
            you must send a message requesting arbitration and describing your
            claim to legal@thars.is. The arbitration will be conducted by the
            International Centre for Dispute Resolution (ICDR), an established
            alternative dispute resolution provider. Disputes involving claims
            and counterclaims under $500,000, not inclusive of attorneys’ fees
            and interest, shall be subject to ICDR’s most current version of the
            International Expedited Procedures then in effect; all other claims
            shall be subject to ICDR’s most current version of the International
            Dispute Resolution Procedures then in effect. ICDR’s rules are
            available at icdr.org. If ICDR is not available to arbitrate, the
            parties will select an alternative arbitral forum. You are
            responsible for all costs that you incur in the arbitration,
            including without limitation, fees for attorneys or expert
            witnesses. As permitted by the applicable rules, you may choose to
            have the arbitration conducted by telephone or videoconference,
            based on written submissions. Any judgment on the award rendered by
            the arbitrator may be entered in any court of competent
            jurisdiction. Any in-person hearing shall be held in Miami, Florida,
            U.S. Authority of Arbitrator. The arbitrator shall have exclusive
            authority to (a) determine the scope and enforceability of this
            Arbitration Agreement and (b) resolve any dispute related to the
            interpretation, applicability, enforceability, or formation of this
            Arbitration Agreement including, but not limited to, any claim that
            all or any part of this Arbitration Agreement is void or voidable.
            The arbitration will decide the rights and liabilities, if any, of
            you and Evmos Parties. The arbitration proceeding will not be
            consolidated with any other matters or joined with any other cases
            or parties. The arbitrator shall have the authority to grant motions
            dispositive of all or part of any claim. The arbitrator shall have
            the authority to award monetary damages and to grant any
            non-monetary remedy or relief available to an individual under
            applicable law, the arbitral forum’s rules, and these Terms. The
            arbitrator shall issue a written award and statement of decision
            describing the essential findings and conclusions on which the award
            is based, including the calculation of any damages awarded. The
            arbitrator has the same authority to award relief on an individual
            basis that a judge in a court of law would have. The award of the
            arbitrator is final and binding upon you and us. Waiver of Jury
            Trial. YOU AND EVMOS PARTIES HEREBY WAIVE ANY CONSTITUTIONAL AND
            STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A
            JUDGE OR A JURY. You and Evmos Parties are instead electing that all
            claims and disputes shall be resolved by arbitration under this
            Arbitration Agreement, except as specified in the second bullet of
            this Section 15, above (“Applicability of Arbitration Agreement”).
            An arbitrator can award on an individual basis the same damages and
            relief as a court and must follow these Terms as a court would.
            However, there is no judge or jury in arbitration, and court review
            of an arbitration award is subject to very limited review. Waiver of
            Class Actions and Class Arbitrations. ALL CLAIMS AND DISPUTES WITHIN
            THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN
            INDIVIDUAL BASIS AND NOT ON A REPRESENTATIVE OR COLLECTIVE CLASS
            BASIS. ONLY INDIVIDUAL RELIEF IS AVAILABLE, AND CLAIMS OF MORE THAN
            ONE USER, PERSON, OR ENTITY CANNOT BE ARBITRATED OR CONSOLIDATED
            WITH THOSE OF ANY OTHER USER, PERSON, OR ENTITY. Accordingly, under
            the arbitration procedures outlined in this section, an arbitrator
            shall not combine or consolidate more than one party’s claims
            without the written consent of all affected parties to an
            arbitration proceeding. Without limiting the generality of the
            foregoing, you and Evmos Parties agree that no dispute shall proceed
            by way of class arbitration without the written consent of all
            affected parties. If a decision is issued stating that applicable
            law precludes enforcement of any part of this subsection’s
            limitations as to a given claim for relief, then that claim must be
            severed from the arbitration and brought in the state or federal
            courts located in the State of Delaware. All other claims shall be
            arbitrated. Severability. Except as provided in this Section, if any
            part or parts of this Arbitration Agreement are found under the law
            to be invalid or unenforceable, then such specific part or parts
            shall be of no force and effect and shall be severed and the
            remainder of the Arbitration Agreement shall continue in full force
            and effect. Survival of Agreement. This Arbitration Agreement will
            survive the termination of your relationship with Evmos.
            Modification. Notwithstanding any provision in these Terms to the
            contrary, we agree that if Evmos makes any future material change to
            this Arbitration Agreement, you may reject that change within thirty
            (30) days of such change becoming effective by writing to
            legal@thars.is.
          </p>
          <p>
            <b>16. Governing Law and Venue</b>{" "}
          </p>
          <p>
            Except as otherwise expressly stated herein, these Terms and your
            access to and use of the Service shall be governed by and construed
            and enforced in accordance with the laws of the British Virgin
            Islands (without regard to conflict of law rules, or any other
            jurisdiction that would cause the application of the laws of any
            other jurisdiction). For any dispute between the parties that is not
            subject to arbitration as set forth in Section 15, each party hereby
            submits to the exclusive jurisdiction of the Courts of the British
            Virgin Islands, and agrees that any such action, suit, proceeding or
            dispute shall be brought only in such courts.
          </p>
          <p>
            <b>17. Termination </b>
          </p>
          <p>
            If you breach any of the provisions of these Terms, all licenses
            granted by Evmos will terminate automatically. Additionally,
            notwithstanding anything contained in these Terms, we reserve the
            right, with or without notice and in our sole discretion, to
            suspend, disable, or terminate your ability to access or use the
            Service (or any part of the foregoing) at any time and for any or no
            reason, and you acknowledge and agree that we shall have no
            liability or obligation to you in such event and that you will not
            be entitled to a refund of any amounts that you have already paid to
            us.
          </p>
          <p>
            <b>18. Severability</b>{" "}
          </p>
          <p>
            If any term, clause, or provision of these Terms is held invalid or
            unenforceable, then that term, clause, or provision will be
            severable from these Terms and will not affect the validity or
            enforceability of any remaining part of that term, clause, or
            provision, or any other term, clause, or provision of these Terms.
          </p>
          <p>
            <b>19. Injunctive Relief</b>{" "}
          </p>
          <p>
            You agree that a breach of these Terms will cause irreparable injury
            to Evmos for which monetary damages would not be an adequate remedy
            and Evmos shall be entitled to equitable relief in addition to any
            remedies it may have hereunder or at law without a bond, other
            security, or proof of damages.
          </p>
          <p>
            <b>20. Export Laws</b>{" "}
          </p>
          <p>
            You agree that you will not export or re-export, directly or
            indirectly, the Service, and/or other information or materials
            provided by Evmos hereunder, to any country for which the United
            States or any other relevant jurisdiction requires any export
            license or other governmental approval at the time of export without
            first obtaining such license or approval. But without limitation,
            the Service may not be exported or re-exported (a) into any U.S.
            embargoed countries or any country that has been designated by the
            U.S. Government as a “terrorist supporting” country, or (b) to
            anyone listed on any U.S. Government list of prohibited or
            restricted parties, including the U.S. Treasury Department’s list of
            Specially Designated Nationals or the U.S. Department of Commerce
            Denied Person’s List or Entity List. By using the Service, you
            represent and warrant that you are not located in any such country
            or on any such list. You are responsible for and hereby agree to
            comply at your sole expense with all applicable United States export
            laws and regulations.
          </p>
          <p>
            <b>21. Survival</b>{" "}
          </p>
          <p>
            All sections which by their nature should survive the termination of
            these Terms shall continue in full force and effect after and
            notwithstanding any termination of these Terms by Evmos Parties or
            you. Termination will not limit any of Evmos Parties’ other rights
            or remedies at law or in equity.
          </p>
          <p>
            <b>22. Miscellaneous</b>{" "}
          </p>
          <p>
            These Terms constitute the entire agreement between you and Evmos
            relating to your access to and use of the Service. These Terms, and
            any rights and licenses granted hereunder, may not be transferred,
            or assigned by you without the prior written consent of Evmos, and
            Evmos’s failure to assert any right or provision under these Terms
            shall not constitute a waiver of such right or provision. No waiver
            by either party of any breach or default hereunder shall be deemed
            to be a waiver of any preceding or subsequent breach or default. The
            section headings used herein are for reference only and shall not be
            read to have any legal effect. The Service is operated by us outside
            the United States. Those who choose to access the Service from
            locations outside the British Virgin Islands do so at their own
            initiative and are responsible for compliance with applicable local
            laws. Except as otherwise provided herein, these Terms are intended
            solely for the benefit of the parties and are not intended to confer
            third-party beneficiary rights upon any other person or entity.
          </p>
          <p>
            <b>23. Disclaimer for staking of Evmos tokens</b>
          </p>
          <p>
            The Evmos protocol is a decentralized peer-to-peer blockchain that
            people can use to stake IBC enabled governance tokens called EVMOS.
            The Evmos protocol is made up of free, public, and open-source
            software. Your use of the Evmos protocol involves various risks,
            including but not limited to losses incurred while EVMOS tokens are
            being staked on third party validators, and supplied to
            decentralized exchanges and liquidity pools, as well as losses due
            to the fluctuation of prices of Evmos or other tokens in a trading
            pair or liquidity pool, including impermanent loss. Before claiming
            any rewards Evmos tokens or staking any Evmos tokens through the
            Evmos website or otherwise you should do your own due diligence to
            make sure you understand how the Evmos protocol works. Additionally,
            you can access the Evmos network and Service through several web or
            mobile interfaces which the Evmos core team does not control. The
            Evmos protocol will not accept any responsibility for any loss of
            Evmos tokens or while using these interfaces. You are responsible
            for doing your own due diligence on those interfaces to understand
            the fees and the risks they present. USE OF THE EVMOS PROTOCOL IS
            PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY
            KIND. Although Tharsis Labs Ltd. developed the initial code for
            Evmos, it does not own or control the Evmos protocol, which is run
            by a decentralized validator set. Upgrades and modifications to the
            protocol are managed through community-driven voting by holders of
            the Evmos governance token. No developer or entity involved in
            creating the Evmos protocol will be liable for any claims or damages
            whatsoever associated with your use, inability to use, or your
            interaction with other users of the Evmos protocol, including any
            direct, indirect, incidental, special, exemplary, punitive or
            consequential damages, or loss of profits, cryptocurrencies, tokens,
            or anything else of value.
          </p>
        </div>
        <div className="space-y-3">
          <b>
            <p>
              By accepting and continuing, you agree to the Evmos terms and
              conditions.
            </p>
          </b>
          <div className="inline-flex space-x-7">
            <ConfirmButton
              onClick={acceptTOS}
              text="accept"
              disabled={isDisabled}
            />
            <LinkButton href="https://www.evmos.org">
              <div className="uppercase">Decline</div>
            </LinkButton>
          </div>
        </div>
      </div>
    </ModalTOS>
  );
};
