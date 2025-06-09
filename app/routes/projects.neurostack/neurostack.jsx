import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';

import sliceAppLarge from '~/assets/NeuroStackLandingPage.png';
import sliceAppPlaceholder from '~/assets/NeuroStackLandingPage.png';
import sliceApp from '~/assets/NeuroStackLandingPage.png';  

import sliceBackgroundBarLarge from '~/assets/NeuroStackwireframe.png';
import sliceBackgroundBarPlaceholder from '~/assets/NeuroStackwireframe.png';
import sliceBackgroundBar from '~/assets/NeuroStackwireframe.png';


import sliceBackgroundLarge from '~/assets/NeuroStackBG.png';
import sliceBackgroundPlaceholder from '~/assets/NeuroStackBG.png';
import sliceBackground from '~/assets/NeuroStackBG.png';

import sliceIrlPlaceholder from '~/assets/NeuroStackProject.png';
import sliceIrl from '~/assets/NeuroStackProject.png';
import sliceSidebarAnnotationsLarge from '~/assets/NeuroStackMG.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/NeuroStackMG.png';
import sliceSidebarAnnotations from '~/assets/NeuroStackMG.png';

import sliceSidebarLayersLarge from '~/assets/NeuroStackAbout.png';
import sliceSidebarLayersPlaceholder from '~/assets/NeuroStackAbout.png';
import sliceSidebarLayers from '~/assets/NeuroStackAbout.png';

import sliceSlidesLarge from '~/assets/NeuroStackSS.png';
import sliceSlidesPlaceholder from '~/assets/NeuroStackSS.png';
import sliceSlides from '~/assets/NeuroStackSS.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import styles from './slice.module.css';

const title = 'NeuroStack Landing Page';
const description =
  'We developed a sleek, user-friendly landing page for NeuroAssist PAL at NeuroStack, highlighting its AI-driven features for healthcare professionals. The page simplifies complex neurotechnology, aligns with NeuroStack’s green and black branding, and promotes seamless user engagement.';
const roles = ['Frontend: React.js, Vite, Tailwind CSS', 'Backend: Node.js, Express.js', 'Database: MongoDB', 'Tools: GitHub, Postman'];

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
                Healthcare professionals needed an intuitive platform to work efficiently with neurological tools, but existing solutions were often cluttered and hard to navigate. To solve this, we built a responsive web application using React.js, Vite, and Tailwind CSS, ensuring seamless performance across devices from mobile phones to large desktops. Tailwind's utility first classes enabled precise control over layout and responsiveness. 
              </ProjectSectionText>
              <ProjectSectionText>
                The backend was powered by Node.js, Express.js, and MongoDB, with tools like GitHub and Postman used for version control and API testing.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
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
                To deliver a robust and efficient landing page, we chose React.js for its component-based architecture, enabling rapid development and a responsive UI for NeuroAssist PAL’s features. Postman streamlined API testing, ensuring seamless integration with the backend for services like the Doctor-Patient Management System, while Vite and Tailwind CSS optimized performance and styling across devices.
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
                  height={490}
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
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div> */}
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                To highlight NeuroStack’s website as impact, I designed the UI using a minimalist wireframe layout that prioritizes clarity and functionality. This approach ensures that the interface remains clean, focused, and user-friendly, making it easier for users—especially healthcare professionals—to engage with the platform’s features without distraction.
              </ProjectSectionText>
                <ProjectSectionText>
                The layout is organized into a structured grid, featuring a central hero section for key messaging, dedicated blocks for services, and a section to highlight blogs or updates. This design provides a strong visual hierarchy and intuitive navigation, catering to both doctors and patients with varying levels of tech familiarity.
              </ProjectSectionText>
                <ProjectSectionText>
                A white background was selected to reinforce a sleek, professional aesthetic, while subtle placeholders accommodate high-resolution visuals and interactive tools, such as perimeter and area measurements. This design simplifies the presentation of complex neurological data, making the platform accessible and easy to use across a diverse user base.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The landing page of NeuroStack significantly boosted the visibility of its key product, NeuroAssist PAL, with blog integration increasing user retention by 20%. The user-friendly design, along with dark mode support, enhanced engagement with features like the Doctor-Patient Management System—advancing NeuroStack’s mission in the field of neurotechnology.
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
