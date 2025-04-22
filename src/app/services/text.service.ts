import { Injectable } from "@angular/core";
import { Texts, LanguageText, SectionTexts } from "../interfaces/texts.interface";

@Injectable({
    providedIn: "root",
})
export class TextService {
    private texts: Texts = {
        aboutMe: {
            title: {
                en: "About me",
                de: "Über mich",
            },
            text1: {
                en: "Hi, I’m Tobias – a web developer from St. Gallen. What do I enjoy most? Automating and digitizing processes. Thanks to my background in energy technology and sales, I build software that really works in practice. With my open nature, I listen carefully to what matters to you and together we find the best way forward.",
                de: "Hallo, ich bin Tobias, Web-Entwickler aus St. Gallen. Was mir besonders Spass macht? Prozesse zu automatisieren und zu digitalisieren. Mit meiner Erfahrung in der Energietechnik und im Vertrieb entwickle ich Software, die in der Praxis wirklich funktioniert. Dank meiner offenen Art höre ich genau zu, was Ihnen wichtig ist, und finde gemeinsam mit Ihnen den besten Weg.",
            },
            text2: {
                en: "I began programming to simplify business operations. It wasn’t long before I discovered a passion for modern web technologies that turn complicated processes into everyday advantages.",
                de: "Ich habe mit der Programmierung angefangen, um Geschäftsabläufe einfacher zu machen. Dabei entdeckte ich schnell meine Begeisterung für moderne Webtechnologien, die es ermöglichen, komplizierte Abläufe so zu gestalten, dass sie im Alltag einen echten Unterschied machen.",
            },
            text3: {
                en: "While working on exciting projects, I continually improve my skills—especially in modern backend technologies. This keeps me up-to-date and allows me to develop systems that perfectly meet my clients’ needs. For me, it means tackling complex challenges with straightforward, practical solutions.",
                de: "Während ich an spannenden Projekten arbeite, bilde ich mich ständig weiter – besonders im Bereich moderner Backend-Technologien. So bleibe ich immer auf dem neuesten Stand und kann Systeme entwickeln, die genau zu den Anforderungen meiner Kunden passen. Für mich heisst das, komplexe Herausforderungen mit einfachen, praxisnahen Lösungen anzugehen.",
            },
        },
        mySkills: {
            text1: {
                en: "I have expanded my web development skills, enabling me to create various real projects.",
                de: "Ich habe meine Fähigkeiten in der Webentwicklung ausgebaut, die es mir ermöglicht haben, verschiedene reale Projekte zu erstellen.",
            },
        },
        portfolio: {
            text1: {
                en: "Discover a diverse range of projects, from practical tools to creative experiments, and see my skills in action",
                de: "Entdecken Sie eine vielfältige Auswahl an Projekten – von praktischen Anwendungen bis zu kreativen Experimenten – und erleben Sie meine Fähigkeiten in Aktion.",
            },
        },
        contact: {
            text1: {
                en: "Got an idea or a problem to solve?",
                de: "Haben Sie eine Idee oder ein Problem zu lösen?",
            },
            text2: {
                en: "Contact me through this form. I’m eager to hear from you, learn about your ideas, and help bring your projects to life – whether it’s a custom website with unique features or a full-scale webshop.</br></br>Need a web developer? <b>Contact me!</b>",
                de: "Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen – sei es eine Webseite mit individuellen Funktionen oder ein kompletter Webshop.</br></br>Benötigen Sie einen Webentwickler? <b>Kontaktieren Sie mich!</b>",
            },
        },

        privacy: {
            text1: {
                de: `
                    <br />
                    <p>Zuletzt aktualisiert am: 11.03.2025</p>
                    <br />
                    <p>Wir legen grossen Wert darauf, dass der Umgang mit Personendaten transparent ist. Diese Datenschutzerklärung gibt Auskunft darüber, welche personenbezogenen Daten wir sammeln, zu welchem Zweck und an wen wir sie weitergeben. Um eine hohe Transparenz zu gewährleisten, wird diese Datenschutzerklärung regelmässig überprüft und aktualisiert.</p>
                    <br />
                    <h3>1. Welche Dienste wir nutzen</h3>
                    <p></p>
                    <ul>
                      <li><span>Google Analytics</span></li>
                    </ul>
                    <p></p>
                    <br />
                    <h3>2. Kontaktinformationen</h3>
                    <p>Bei Fragen oder Anliegen zum Schutz Ihrer Daten durch uns erreichen Sie uns jederzeit per E-Mail unter to.hungerbuehler@gmail.com. Verantwortlich für die Datenbearbeitungen, die über diese Website erfolgen, ist:</p>
                    <br />
                    <p>Tobias Hungerbühler<br />Ilgenstr. 52<br />9000 St. Gallen<br />Schweiz<br /><br /><strong>Datenschutzverantwortliche Person:</strong><br />Tobias Hungerbühler<br />to.hungerbuehler@gmail.com<br /></p>
                    <br />
                    <h3>3. Allgemeine Grundsätze</h3>
                    <h3>3.1 Welche Daten sammeln wir von Ihnen und von wem erhalten wir diese Daten</h3>
                    <p>In erster Linie bearbeiten wir Personendaten, die Sie uns übermitteln oder die wir beim Betrieb unserer Website sammeln. Unter Umständen erhalten wir Personendaten über Sie auch von Dritten. Das können folgende Kategorien sein:</p>
                    <ul>
                      <li>Personenstammdaten (Name, Adresse, Geburtsdaten, etc.);</li>
                      <li>Kontaktdaten (Handynummer, E-Mailadresse, etc.);</li>
                      <li>Finanzdaten (bspw. Kontoangaben);</li>
                      <li>Onlinekennungen (bspw. Cookie-Kennung, IP-Adressen);</li>
                      <li>Standort- und Verkehrsdaten;</li>
                      <li>Ton- und Bildaufnahmen;</li>
                      <li>besonders schützenswerte Daten (bspw. biometrische Daten oder Angaben über Ihre Gesundheit).</li>
                    </ul>
                    <br />
                    <h3>3.2 Unter welchen Voraussetzungen bearbeiten wir Ihre Daten?</h3>
                    <p>Wir behandeln Ihre Daten vertraulich und gemäss den in dieser Datenschutzerklärung festgelegten Zwecken. Wir achten dabei auf eine transparente und verhältnismässige Bearbeitung.<br /><br />Falls wir ausnahmsweise nicht in der Lage sind, diese Grundsätze zu befolgen, kann die Datenbearbeitung trotzdem rechtmässig sein, weil ein Rechtfertigungsgrund vorliegt. Als Rechtfertigungsgrund kommt namentlich in Frage:</p>
                    <ul>
                      <li>Ihre Einwilligung;</li>
                      <li>die Durchführung eines Vertrages oder vorvertraglicher Massnahmen;</li>
                      <li>unsere berechtigten Interessen, sofern Ihre Interessen nicht überwiegen.</li>
                    </ul>
                    <br />
                    <h3>3.3 Wie können Sie Ihre Einwilligung widerrufen?</h3>
                    <p>Haben Sie uns eine Einwilligung zur Bearbeitung Ihrer personenbezogenen Daten für bestimmte Zwecke erteilt, bearbeiten wir Ihre Daten im Rahmen dieser Einwilligung, soweit wir keinen anderen Rechtfertigungsgrund haben.<br /><br />Sie haben jederzeit die Möglichkeit, Ihre Einwilligung zu widerrufen, indem Sie eine E-Mail an die im Impressum genannte Adresse schicken. Bereits erfolgte Datenverarbeitungen sind davon nicht betroffen.</p>
                    <br />
                    <h3>3.4 In welchen Fällen können wir Ihre Daten an Dritte weitergeben?</h3>
                    <br />
                    <h4>a. Grundsatz</h4>
                    <p>Wir sind unter Umständen darauf angewiesen, die Dienste Dritter oder von verbundenen Unternehmen in Anspruch zu nehmen und diese mit der Verarbeitung Ihrer Daten zu beauftragen (sog. Auftragsverarbeiter). Kategorien der Empfänger sind namentlich:</p>
                    <ul>
                      <li>Buchhaltung, Treuhand und Revisionsunternehmen;</li>
                      <li>Beratungsunternehmen (Rechtsberatung, Steuern, etc.);</li>
                      <li>IT-Dienstleister (Webhosting, Support, Clouddienste, Webseitengestaltung, etc.);</li>
                      <li>Zahlungsdienstleister;</li>
                      <li>Anbieter von Tracking-, Conversion- und Werbedienstleistungen.</li>
                    </ul>
                    <br />
                    <p>Wir stellen sicher, dass diese Dritten und unsere verbundenen Unternehmen die Voraussetzungen des Datenschutzes einhalten und Ihre personenbezogenen Daten vertraulich behandeln.<br /><br />Unter Umständen sind wir auch verpflichtet, Ihre personenbezogenen Daten an Behörden bekanntzugeben.</p>
                    <br />
                    <h4>b. Besuch unserer Social-Media-Kanäle</h4>
                    <p>Wir haben eventuell auf unserer Website Links zu unseren Social-Media-Kanälen eingebettet. Das ist für Sie jeweils ersichtlich (typischerweise über entsprechende Symbole). Klicken Sie auf die Symbole, werden Sie auf unsere Social-Media-Kanäle weitergeleitet.<br /><br />Die Social Media Anbieter erfahren in diesem Fall, dass Sie von unserer Website auf deren Plattform zugreifen. Die Social Media Anbieter können die so erhobenen Daten für eigene Zwecke nutzen. Wir weisen darauf hin, dass wir keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch die Betreiber erhalten.</p>
                    <br />
                    <h4>c. Weitergabe ins Ausland</h4>
                    <p>Unter Umständen kann es im Rahmen der Auftragsbearbeitung zu Übermittlung Ihrer personenbezogenen Daten an Unternehmen im Ausland kommen. Diese Unternehmen sind im gleichen Umfang zum Datenschutz verpflichtet, wie wir selbst. Die Übermittlung kann weltweit stattfinden.<br /><br />Entspricht das Datenschutzniveau nicht demjenigen der Schweiz, so nehmen wir eine vorgängige Risikoeinschätzung vor und stellen vertraglich sicher, dass der gleiche Schutz wie in der Schweiz garantiert wird (bspw. mittels der neuen Standardvertragsklauseln der EU-Kommission oder anderen, gesetzlich vorgegebenen Massnahmen). Sollte unsere Risikoeinschätzung negativ ausfallen, ergreifen wir zusätzliche technische Massnahmen zum Schutz Ihrer Daten. Sie können die Standardvertragsklauseln der EU-Kommission abrufen unter folgendem Link: https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_de</p>
                    <br />
                    <h3>3.5 Wie lange bewahren wir Ihre Daten auf?</h3>
                    <p>Wir speichern personenbezogene Daten nur so lange, wie dies erforderlich ist, um die einzelnen Zwecke, zu denen die Daten erhoben wurden, zu erfüllen.<br /><br />Daten, die wir bei Ihrem Besuch auf unserer Website speichern, werden während zwölf Monaten aufbewahrt. Eine Ausnahme gilt für Analyse- und Trackingdaten, die länger aufbewahrt werden können.<br /><br />Vertragsdaten speichern wir länger, da wir dazu durch gesetzliche Vorschriften verpflichtet sind. Wir müssen insbesondere geschäftliche Kommunikation, geschlossene Verträge und Buchungsbelege bis zu 10 Jahren aufbewahren. Soweit wir solche Daten von Ihnen nicht mehr zur Durchführung der Dienstleistungen benötigen, werden die Daten gesperrt und wir verwenden sie nur noch für Zwecke der Rechnungslegung und für Steuerzwecke.</p>
                    <br />
                    <h3>3.6 Wie schützen wir Ihre Daten?</h3>
                    <p>Wir werden Ihre Daten sicher aufbewahren und alle angemessenen Massnahmen ergreifen, um Ihre Daten vor Verlust, Zugriff, Missbrauch oder Änderungen zu schützen.<br /><br />Unsere Vertragspartner und Mitarbeitende, die Zugang zu Ihren Daten haben, sind zur Einhaltung der datenschutzrechtlichen Bestimmungen verpflichtet. In manchen Fällen wird es erforderlich sein, dass wir Ihre Anfragen an mit uns verbundene Unternehmen weiterreichen. Auch in diesen Fällen werden Ihre Daten vertraulich behandelt.<br /><br />Innerhalb unserer Webseite verwenden wir das SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.</p>
                    <br />
                    <h3>3.7 Welche Rechte haben Sie?</h3>
                    <br />
                    <h4>a. Auskunftsrecht</h4>
                    <p>Sie können jederzeit eine Auskunft über die von uns über Sie gespeicherten Daten verlangen. Wir bitten Sie, Ihr Auskunftsgesuch zusammen mit einem Identitätsnachweis an to.hungerbuehler@gmail.com zu senden.<br /><br />Sie haben ausserdem das Recht, Ihre Daten in einem gängigen Dateiformat zu erhalten, wenn wir Ihre Daten automatisiert bearbeiten, und wenn:</p>
                    <ul>
                      <li>Sie Ihre Einwilligung für die Bearbeitung dieser Daten erteilt haben; oder</li>
                      <li>Sie Daten im Zusammenhang mit dem Abschluss oder der Abwicklung eines Vertrags bekannt gegeben haben.</li>
                    </ul>
                    <p>Wir können die Auskunft bzw. Datenherausgabe einschränken oder verweigern, wenn dies unseren gesetzlichen Verpflichtungen, berechtigten eigenen oder öffentlichen Interessen oder Interessen einer Drittperson entgegensteht.<br /><br />Die Bearbeitung Ihres Gesuchs unterliegt der gesetzlichen Bearbeitungsfrist von 30 Tagen. Diese Frist dürfen wir jedoch aufgrund von hohem Anfragevolumen, aus rechtlichen oder technischen Gründen oder weil wir nähere Angaben von Ihnen benötigen, verlängern. Sie werden über die Fristverlängerung rechtzeitig mindestens in Textform informiert.</p>
                    <br />
                    <h4>b. Löschung und Berichtigung</h4>
                    <br />
                    <p>Sie haben jederzeit die Möglichkeit, die Löschung oder Berichtigung Ihrer Daten zu verlangen. Wir können das Gesuch abweisen, wenn gesetzliche Vorschriften uns zur längeren bzw. unveränderten Aufbewahrung verpflichten oder ein Erlaubnistatbestand Ihrem Gesuch entgegensteht.<br /><br />Bitte beachten Sie, dass die Ausübung Ihrer Rechte unter Umständen im Konflikt mit vertraglichen Abmachungen stehen und entsprechende Auswirkungen auf die Vertragsdurchführung haben kann (z.B. vorzeitige Vertragsauflösung oder Kostenfolgen).</p>
                    <br />
                    <h4>c. Rechtsweg</h4>
                    <p>Sind Sie von der Bearbeitung personenbezogener Daten betroffen, haben Sie das Recht, Ihre Rechte gerichtlich durchzusetzen oder bei der zuständigen Aufsichtsbehörde eine Meldung einzureichen. Die zuständige Aufsichtsbehörde in der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte: https://www.edoeb.admin.ch</p>
                    <br />
                    <h3>3.8 Änderungen an der Datenschutzerklärung</h3>
                    <p>Wir können diese Datenschutzerklärung jederzeit ändern. Die Änderungen werden auf thtech.ch veröffentlicht, Sie werden nicht gesondert darüber informiert.</p>
                    <br />
                    <h3>4. Einzelne Datenverarbeitungsvorgänge</h3>
                    <br />
                    <h3>4.1 Bereitstellen der Webseite und Erstellung von Logfiles</h3>
                    <br />
                    <h4>Welche Informationen erhalten wir und wie nutzen wir sie?</h4>
                    <p>Indem Sie thtech.ch besuchen, werden auf unseren Servern oder auf Servern von Dienstleistungen und Produkten, die wir beziehen und/oder installiert haben, bestimmte Daten automatisch zu Zwecken der Systemadministration, für statistische oder für sicherungszwecke oder für Trackingzwecke gespeichert. Es handelt sich dabei um:</p>
                    <ul>
                      <li>den Namen Ihres Internetserviceproviders;</li>
                      <li>Ihre IP-Adresse (unter Umständen);</li>
                      <li>die Version Ihrer Browser-Software;</li>
                      <li>das Betriebssystem des Rechners mit dem auf die URL zugegriffen wird;</li>
                      <li>das Datum und die Uhrzeit des Zugriffs;</li>
                      <li>die Webseite, von der aus Sie URL besuchen;</li>
                      <li>die Suchwörter die Sie benutzt haben, um die URL finden.</li>
                    </ul>
                    <br />
                    <h4>Weshalb dürfen wir diese Daten bearbeiten?</h4>
                    <p>Diese Daten können keiner bestimmten Person zugeordnet werden und es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Die Speicherung der Logfiles erfolgt, um die Funktionsfähigkeit der Webseite zu garantieren und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Hierin besteht unser berechtigtes Interesse.</p>
                    <br />
                    <h4>Wie können Sie die Datenerfassung verhindern?</h4>
                    <p>Die Daten werden nur solange gespeichert, wie dies zur Erreichung des Zweckes Ihrer Erhebung notwendig ist. Dementsprechend werden die Daten nach Beendigung jeder Sitzung gelöscht. Die Speicherung der Logfiles ist für den Betrieb der Webseite zwingend notwendig, Sie haben daher keine Möglichkeit dagegen Widerspruch zu erheben.</p>
                    <br /><br />
                    <h3>4.2 Google Analytics</h3>
                    <p>Wir verwenden auf unserer Website Google Analytics, einen Webanalysedienst der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; "Google"). Google Analytics verwendet sogenannte "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.<br /><br />Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.<br /><br />Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.<br /><br />Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.<br /><br />Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout.</p>
                    <br /><br />
                    <h3>BrainBox Generatoren</h3>
                    <p>BrainBox Generatoren ist ein Dienst der <a style="color: inherit" href="https://brainbox.swiss/" target="_blank" rel="nofollow">BrainBox Solutions GmbH</a>, um alle datenschutzrelevanten Dienste auf einer Website zu erkennen und unter anderem damit bei der Erstellung der Datenschutzerklärung zu helfen. Dabei werden keine personenbezogenen Daten erfasst oder verarbeitet.</p>
                  `,

                en: `
                    <br />
                    <p>Last updated on: 11.03.2025</p>
                    <br />
                    <p>We place great value on transparency in the handling of personal data. This privacy policy provides information about which personal data we collect, for what purpose, and to whom we disclose it. To ensure high transparency, this policy is regularly reviewed and updated.</p>
                    <br />
                    <h3>1. Which services we use</h3>
                    <p></p>
                    <ul>
                      <li><span>Google Analytics</span></li>
                    </ul>
                    <p></p>
                    <br />
                    <h3>2. Contact information</h3>
                    <p>If you have any questions or concerns about our handling of your data, you can reach us at any time by email at to.hungerbuehler@gmail.com. The responsible party for data processing on this website is:</p>
                    <br />
                    <p>Tobias Hungerbühler<br />Ilgenstr. 52<br />9000 St. Gallen<br />Switzerland<br /><br /><strong>Data Protection Officer:</strong><br />Tobias Hungerbühler<br />to.hungerbuehler@gmail.com<br /></p>
                    <br />
                    <h3>3. General principles</h3>
                    <h3>3.1 Which data we collect about you and from whom we receive this data</h3>
                    <p>Primarily, we process personal data that you provide to us or that we collect when operating our website. We may also receive personal data about you from third parties. These may include the following categories:</p>
                    <ul>
                      <li>Identity data (name, address, date of birth, etc.);</li>
                      <li>Contact data (mobile phone number, email address, etc.);</li>
                      <li>Financial data (e.g. bank details);</li>
                      <li>Online identifiers (e.g. cookie identifiers, IP addresses);</li>
                      <li>Location and traffic data;</li>
                      <li>Sound and image recordings;</li>
                      <li>Special categories of personal data (e.g. biometric data or health information).</li>
                    </ul>
                    <br />
                    <h3>3.2 Under what conditions do we process your data?</h3>
                    <p>We treat your data confidentially and in accordance with the purposes set out in this privacy policy. We ensure transparent and proportionate processing.<br /><br />If, in exceptional cases, we are unable to adhere to these principles, data processing may still be lawful because a legal basis applies. The following legal bases may apply:</p>
                    <ul>
                      <li>Your consent;</li>
                      <li>The performance of a contract or pre-contractual measures;</li>
                      <li>Our legitimate interests, provided your interests do not override them.</li>
                    </ul>
                    <br />
                    <h3>3.3 How can you withdraw your consent?</h3>
                    <p>If you have consented to the processing of your personal data for certain purposes, we will process your data within the scope of that consent, provided we have no other legal basis.<br /><br />You may withdraw your consent at any time by sending an email to the address specified in the imprint. Data processing that has already taken place will not be affected.</p>
                    <br />
                    <h3>3.4 In which cases can we disclose your data to third parties?</h3>
                    <br />
                    <h4>a. Principle</h4>
                    <p>In some cases, we may need to use the services of third parties or affiliated companies and engage them to process your data (so-called processors). Categories of recipients may include:</p>
                    <ul>
                      <li>Accounting, fiduciary, and auditing firms;</li>
                      <li>Consulting firms (legal advice, tax, etc.);</li>
                      <li>IT service providers (web hosting, support, cloud services, web development, etc.);</li>
                      <li>Payment service providers;</li>
                      <li>Providers of tracking, conversion, and advertising services.</li>
                    </ul>
                    <br />
                    <p>We ensure that these third parties and our affiliated companies comply with data protection requirements and treat your personal data confidentially.<br /><br />We may also be required to disclose your personal data to authorities.</p>
                    <br />
                    <h4>b. Visiting our social media channels</h4>
                    <p>We may embed links to our social media channels on our website. These are recognizable to you (typically through icons). If you click on the icons, you will be redirected to our social media channels.<br /><br />In this case, social media providers learn that you have accessed their platform from our website. They may use the data collected for their own purposes. We have no knowledge of the content of the data transmitted or its use by the providers.</p>
                    <br />
                    <h4>c. International data transfers</h4>
                    <p>In the context of order processing, it may be necessary to transfer your personal data to companies abroad. These companies are obligated to protect data to the same extent as we are. Transfers may occur worldwide.<br /><br />If the data protection level is not equivalent to that of Switzerland, we will conduct a prior risk assessment and contractually ensure an equivalent level of protection (e.g., using the EU Commission’s Standard Contractual Clauses or other legally required measures). If our risk assessment is negative, we will implement additional technical safeguards. You can access the EU Commission’s Standard Contractual Clauses at the following link: https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_de</p>
                    <br />
                    <h3>3.5 How long do we retain your data?</h3>
                    <p>We store personal data only as long as necessary to fulfill the purposes for which the data was collected.<br /><br />Data stored when you visit our website is retained for twelve months. An exception applies to analytics and tracking data, which may be retained longer.<br /><br />Contract data is retained longer, as required by law. In particular, business communications, concluded contracts, and accounting records must be retained for ten years. If we no longer need such data to provide our services, they will be archived and used only for accounting and tax purposes.</p>
                    <br />
                    <h3>3.6 How do we protect your data?</h3>
                    <p>We store your data securely and take all appropriate measures to protect it from loss, access, misuse, or alteration.<br /><br />Our contractors and employees who have access to your data are bound to comply with data protection regulations. In some cases, we may need to forward your requests to affiliated companies. Even then, your data is treated confidentially.<br /><br />Within our website, we use SSL (Secure Socket Layer) with the highest level of encryption supported by your browser.</p>
                    <br />
                    <h3>3.7 What rights do you have?</h3>
                    <br />
                    <h4>a. Right of access</h4>
                    <p>You may request information about the data we hold about you at any time. Please send your request along with proof of identity to to.hungerbuehler@gmail.com.<br /><br />You also have the right to receive your data in a common electronic format if we process it automatically and if:</p>
                    <ul>
                      <li>You have given consent to the processing;</li>
                      <li>You provided the data in connection with the conclusion or performance of a contract.</li>
                    </ul>
                    <p>We may restrict or refuse access if this conflicts with legal obligations, legitimate public or private interests, or the rights of third parties.<br /><br />We process requests within 30 days, which may be extended for legal or technical reasons or in case of high request volumes. You will be informed of any extension in writing.</p>
                    <br />
                    <h4>b. Erasure and rectification</h4>
                    <br />
                    <p>You may request erasure or correction of your data at any time. We may refuse if legal retention obligations or other legal bases prevent erasure.<br /><br />Please note that exercising these rights may affect contract performance (e.g., early termination or costs).</p>
                    <br />
                    <h4>c. Legal remedies</h4>
                    <p>If you believe your data is processed unlawfully, you have the right to seek judicial remedies or lodge a complaint with the competent supervisory authority. In Switzerland, this is the Federal Data Protection and Information Commissioner: https://www.edoeb.admin.ch</p>
                    <br />
                    <h3>3.8 Changes to the privacy policy</h3>
                    <p>We may change this privacy policy at any time. Changes will be published on thtech.ch; you will not be notified separately.</p>
                    <br />
                    <h3>4. Specific data processing operations</h3>
                    <br />
                    <h3>4.1 Provision of the website and creation of log files</h3>
                    <br />
                    <h4>What information do we receive and how do we use it?</h4>
                    <p>When you visit thtech.ch, certain data are automatically stored on our servers or those of service providers we use for system administration, statistical, backup, or tracking purposes. These include:</p>
                    <ul>
                      <li>The name of your Internet service provider;</li>
                      <li>Your IP address (under certain circumstances);</li>
                      <li>The version of your browser software;</li>
                      <li>The operating system of the device used to access the URL;</li>
                      <li>The date and time of access;</li>
                      <li>The website from which you navigate to our URL;</li>
                      <li>The search terms you used to find the URL.</li>
                    </ul>
                    <br />
                    <h4>Why can we process this data?</h4>
                    <p>This data cannot be attributed to a specific person, and no link is made with other data sources. Log files are stored to ensure website functionality and security of our IT systems. This is our legitimate interest.</p>
                    <br />
                    <h4>How can you prevent data collection?</h4>
                    <p>Data is stored only as long as necessary for the purpose. Accordingly, data is deleted after each session. Since log file storage is essential for website operation, you cannot object.</p>
                    <br />
                    <br /><br />
                    <h3>4.2 Google Analytics</h3>
                    <p>We use Google Analytics, a web analytics service provided by Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; “Google”). Google Analytics uses “cookies,” text files stored on your computer that enable analysis of your website usage.<br /><br />The information generated by the cookie about your use of this site is usually transmitted to a Google server in the USA and stored there. If IP anonymization is activated, Google truncates your IP within member states of the EU or EEA before transmission. In exceptional cases, the full IP address is sent to a Google server in the USA and truncated there.<br /><br />On our behalf, Google uses this information to evaluate your website usage, compile reports on website activity, and provide other services related to website and internet usage to the site operator.<br /><br />Google does not associate the IP address transmitted by your browser in the context of Google Analytics with other Google data.<br /><br />You may disable cookie storage via your browser settings; however, this may affect website functionality. You can also prevent data use by Google by downloading and installing the browser plugin available at https://tools.google.com/dlpage/gaoptout.</p>
                    <br /><br />
                    <h3>BrainBox Generators</h3>
                    <p>BrainBox Generators is a service by <a style="color: inherit" href="https://brainbox.swiss/" rel="nofollow" target="_blank">BrainBox Solutions GmbH</a> that detects all data-protection-related services on a website and helps generate the privacy policy. No personal data are collected or processed.</p>
                    `,
            },
        },
        // … bereits vorhandene Sektionen …

        impressum: {
            text1: {
                de: `<b>Verantwortliche Instanz:</b><br/>
                    Tobias Hungerbühler<br/>
                    Ilgenstr. 52<br/>
                    9000 St. Gallen<br/>
                    Schweiz<br/><br/>
                    <strong>E-Mail:</strong> to.hungerbuehler@gmail.com<br/><br/>
                    <strong>Haftungsausschluss</strong><br/>
                    Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.<br/><br/>
                    Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.<br/><br/>
                    <strong>Haftungsausschluss für Inhalte und Links</strong><br/>
                    Verweise und Links auf Webseiten Dritter liegen außerhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.<br/><br/>
                    <strong>Urheberrechtserklärung</strong><br/>
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschließlich Tobias Hungerbühler oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.<br/><br/>
                    <strong>Quelle</strong>: <a style="color: inherit; text-decoration: none" href="https://brainbox.swiss/" target="_blank" rel="nofollow">BrainBox Solutions</a>`,
                en: `<b>Responsible entity:</b><br/>
                    Tobias Hungerbühler<br/>
                    Ilgenstr. 52<br/>
                    9000 St. Gallen<br/>
                    Switzerland<br/><br/>
                    <strong>Email:</strong> to.hungerbuehler@gmail.com<br/><br/>
                    <strong>Disclaimer</strong><br/>
                    The author makes no warranty for the correctness, accuracy, timeliness, reliability, or completeness of the information. Liability claims against the author for material or immaterial damages arising from access to or use/non-use of the published information, misuse of the connection, or technical disruptions are excluded.<br/><br/>
                    All offers are non‑binding. The author expressly reserves the right to change, supplement, delete parts of the pages or the entire offer without separate notice or to discontinue publication temporarily or permanently.<br/><br/>
                    <strong>Disclaimer for content and links</strong><br/>
                    References and links to third‑party websites lie outside our area of responsibility. Any liability for such websites is rejected. Accessing and using such websites is at the user’s own risk.<br/><br/>
                    <strong>Copyright notice</strong><br/>
                    The copyright and all other rights to content, images, photos, or other files on this website are exclusively owned by Tobias Hungerbühler or the specifically named rights holders. Prior written consent of the copyright holder must be obtained for the reproduction of any elements.<br/><br/>
                    <strong>Source</strong>: <a style="color: inherit; text-decoration: none" href="https://brainbox.swiss/" target="_blank" rel="nofollow">BrainBox Solutions</a>`,
            },
        },
    };

    constructor() {}

    getText(section: keyof Texts, key: keyof SectionTexts): LanguageText {
        const sectionTexts = this.texts[section];
        const text = sectionTexts[key];
        if (!text) {
            return { en: "", de: "" }; // Fallback
        }
        return text;
    }
}
