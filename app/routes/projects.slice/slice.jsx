import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';

import sliceAppLarge from '~/assets/NeuroStackLandingPage.png';
import sliceAppPlaceholder from '~/assets/NeuroStackLandingPage.png';
import sliceApp from '~/assets/NeuroStackLandingPage.png';  

import sliceBackgroundBarLarge from '~/assets/NeuroStackblog.png';
import sliceBackgroundBarPlaceholder from '~/assets/NeuroStackblog.png';
import sliceBackgroundBar from '~/assets/NeuroStackblog.png';


import sliceBackgroundLarge from '~/assets/NeuroStackBG.png';
import sliceBackgroundPlaceholder from '~/assets/NeuroStackBG.png';
import sliceBackground from '~/assets/NeuroStackBG.png';

import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
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
                Healthcare professionals needed a collaborative platform to annotate neurological slides, but previously, only one user could annotate a layer, limiting teamwork. We built a mobile-friendly website, enabling users to invite others to a layer, view and add annotations in real-time, and access the platform effortlessly on any device, enhancing group collaboration.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a website, where they can
                see others’ product and make their own.
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
                Users struggled to rediscover content or save key resources. I implemented a “Favorites” feature, enabling quick access to blog posts and slides about NeuroAssist PAL. A responsive layout with clear navigation ensured seamless exploration of services like patient management across all devices.
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
                To highlight NeuroAssist PAL’s impact, I crafted engaging blog posts and integrated high-resolution visuals with annotation tools (e.g., perimeter and area measurements). These clarified complex neurological data, making the platform intuitive for doctors and patients while maintaining a sleek white-background aesthetic.
              </ProjectSectionText>
                <ProjectSectionText>
                To highlight NeuroAssist PAL’s impact, I crafted engaging blog posts and integrated high-resolution visuals with annotation tools (e.g., perimeter and area measurements). These clarified complex neurological data, making the platform intuitive for doctors and patients while maintaining a sleek white-background aesthetic.
              </ProjectSectionText>
                <ProjectSectionText>
                To highlight NeuroAssist PAL’s impact, I crafted engaging blog posts and integrated high-resolution visuals with annotation tools (e.g., perimeter and area measurements). These clarified complex neurological data, making the platform intuitive for doctors and patients while maintaining a sleek white-background aesthetic.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The landing page boosted NeuroAssist PAL’s visibility, with blogs and the “Favorites” feature increasing user retention by 20%. The Doctor-Patient Management System and other services were prominently showcased, enhancing user trust and interaction, aligning with NeuroStack’s mission to advance neurotechnology.
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
