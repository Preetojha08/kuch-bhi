import sliceAnnotationLarge from '~/assets/bankfirebaseSS.png';
import sliceAnnotationPlaceholder from '~/assets/bankfirebaseSS.png';
import sliceAnnotation from '~/assets/bankfirebaseSS.png';

import sliceAppLarge from '~/assets/bankapp.png';
import sliceAppPlaceholder from '~/assets/bankapp.png';
import sliceApp from '~/assets/bankapp.png';  

import sliceBackgroundBarLarge from '~/assets/bankhome.png';
import sliceBackgroundBarPlaceholder from '~/assets/bankhome.png';
import sliceBackgroundBar from '~/assets/bankhome.png';


import sliceBackgroundLarge from '~/assets/bank_bg.png';
import sliceBackgroundPlaceholder from '~/assets/bank_bg.png';
import sliceBackground from '~/assets/bank_bg.png';

import sliceIrlPlaceholder from '~/assets/bankProject.png';
import sliceIrl from '~/assets/bankProject.png';

import sliceSidebarAnnotationsLarge from '~/assets/bank3profile.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/bank3profile.png';
import sliceSidebarAnnotations from '~/assets/bank3profile.png';

import sliceSidebarLayersLarge from '~/assets/bank4.png';
import sliceSidebarLayersPlaceholder from '~/assets/bank4.png';
import sliceSidebarLayers from '~/assets/bank4.png';

import sliceSlidesLarge from '~/assets/bankwireframe.png';
import sliceSlidesPlaceholder from '~/assets/bankwireframe.png';
import sliceSlides from '~/assets/bankwireframe.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Model } from '~/components/model'; // assuming this exists
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './bankapp.module.css';

const title = 'Mobile Banking Application ';
const description =
  'I developed a sleek, user-friendly Bank Android Application using Java in Android Studio, integrated with Firebase Cloud Database for secure data management. The app simplifies banking tasks, aligns with a modern, intuitive design featuring dynamic Light and Dark theme support, and promotes seamless user engagement for a diverse user base.';
const roles = ['Frontend: Java, Kotlin, XML Layouts', 'Backend: Firebase Cloud Database', 'Local Storage: Shared Preferences', 'Tools: Gradle, GitHub, Postman'];


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="NeuroStack Landing Page Project to display its core features and services to the users"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Banking users needed a secure, intuitive mobile platform to manage their finances, but many existing solutions were complex or lacked seamless performance. To address this, I built a responsive Android application using Java and Android Studio, ensuring compatibility across devices from budget smartphones to high-end models. XML layouts enabled precise control over the user interface, delivering a clean and modern design. 
              </ProjectSectionText>
              <ProjectSectionText>
                The backend was powered by Firebase Cloud Database for real-time data storage and retrieval, with Shared Preferences for efficient session management. Tools like Gradle and GitHub were used for build automation and version control.
              </ProjectSectionText>
              <ProjectSectionText>
                ♤ Persistent user sessions for seamless access.<br></br> ♡ Dynamic theme switching for easy accessibility.
              </ProjectSectionText>

            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={650}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />

              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={650}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
        
            </div>
    
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                The wireframe for my Bank Android Application showcases a sleek, user-friendly design developed using Java and Kotlin in Android Studio. This blueprint highlights four key screens—Login Details, Cards Details, Transaction Operations, and User Profile with Settings Options—integrated with Firebase Cloud Database for secure data management. Featuring a modern layout with Light and Dark theme support, it ensures an intuitive and accessible banking experience across devices.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
             
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={340}
                  height={390}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              {/* <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={140}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div> */}
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful Details</ProjectSectionHeading>
              <ProjectSectionText>
               This activity displays the Cards Details screen of my Bank Android Application, built with Java in Android Studio and integrated with Firebase Cloud Database. The design, a clone of Scotiabank’s interface, features a modern dark theme with red accents, creating a user-friendly and visually appealing dashboard for logged-in users. Real-time data via Firebase keeps the balance and details current, aligning with banking app standards.
              </ProjectSectionText>
                <ProjectSectionText>
                The header includes a stylized "S" logo, a personalized "Welcome, Rahul Ojha" message, and navigation icons (search, profile, logout) for quick access. The card section highlights a balance of "36500.32" on a red graphic with a world map and chip icon, symbolizing secure financial data.
              </ProjectSectionText>
                <ProjectSectionText>
                The Services section offers eight icons (Move Money, Scene+ Details, Scotia Advice+, Credit Score, Manage Expense, Account Statements, Scotia Investments, Scotia iTRADE) for easy navigation. Buttons for Discover New Products and Offers and Programs (2), plus a "Let us know what you think!" banner, enhance engagement. This showcases my UI/UX and Android development skills for a portfolio.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The Bank Android Application, crafted as a clone of Scotiabank’s interface, significantly enhances user engagement through its intuitive Cards Details screen, offering a seamless banking experience. The integration of Firebase Cloud Database ensures secure, real-time data management, building user trust and reliability. Personalized services, transaction options, and a feedback prompt improve usability and interaction, demonstrating my proficiency in UI/UX design and Android development, making it a strong addition to my portfolio.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
