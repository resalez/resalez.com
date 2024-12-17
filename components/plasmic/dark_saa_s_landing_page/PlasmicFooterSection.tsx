// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2yfd7ES8pk9cfEjyQyPEpr
// Component: eVfakgQjaJ7-

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Logo from "../../Logo"; // plasmic-import: 1yY4pWuM84nj/component
import Button from "../../Button"; // plasmic-import: -iZ-8DLVp5gH/component

import { useScreenVariants as useScreenVariantsmmwFkRdGmRwd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mmwFkRdGmRWD/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 2yfd7ES8pk9cfEjyQyPEpr/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: eVfakgQjaJ7-/css

import FacebookSvgIcon from "./icons/PlasmicIcon__FacebookSvg"; // plasmic-import: 18HJoyG3uF5x/icon
import TwitterSvgIcon from "./icons/PlasmicIcon__TwitterSvg"; // plasmic-import: nYEJHGn6kzsl/icon
import InstagramSvgIcon from "./icons/PlasmicIcon__InstagramSvg"; // plasmic-import: 92MKqsuE__as/icon
import LinkedinSvgIcon from "./icons/PlasmicIcon__LinkedinSvg"; // plasmic-import: TBLjTAE8gwjh/icon

createPlasmicElementProxy;

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
  logo?: Flex__<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmmwFkRdGmRwd()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___40HKz)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__g7SvD)}>
            <div className={classNames(projectcss.all, sty.freeBox__kTyq0)}>
              <Logo
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames("__wab_instance", sty.logo)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zu2Bj
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed do eiusmod tempor"
                }
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__qfRqV)}>
                <FacebookSvgIcon
                  className={classNames(projectcss.all, sty.svg__dgoTs)}
                  role={"img"}
                />

                <TwitterSvgIcon
                  className={classNames(projectcss.all, sty.svg___5TUev)}
                  role={"img"}
                />

                <InstagramSvgIcon
                  className={classNames(projectcss.all, sty.svg__eDauf)}
                  role={"img"}
                />

                <LinkedinSvgIcon
                  className={classNames(projectcss.all, sty.svg__bidt2)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__kstc9)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__klKkT
              )}
            >
              {"Menu"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__wycz3)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__lmLl)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__yDN)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__v7SA
                )}
              >
                {"Product"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__rYgqT)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__zH979)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jt25F)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__omyhN
                )}
              >
                {"Purchase"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__cRo87)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__oGwvd)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__olile)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wJ4H
                )}
              >
                {"How it Work"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__ldJht)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__hgKuN)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__koeRl)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3OR3P
                )}
              >
                {"About us"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__od3CD)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__mbTlz
              )}
            >
              {"Help"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__pUAyF)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__elVrY)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jeSGb)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1QbdE
                )}
              >
                {"Privacy and\nPolicy"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__y4ARa)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xWbQp)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__y8Sig)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cEn1Y
                )}
              >
                {"Terms of Use"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column___2M4Fo)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__pfA4
              )}
            >
              {"Company"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__laxn7)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__kvftm)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___12Ak)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yuG14
                )}
              >
                {"Our Team"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__yWfQb)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__ktUbn)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__gyWjz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__anFUz
                )}
              >
                {"Partner with us"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__qNi4M)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__yLwCx)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__nQsvz)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bRNg5
                )}
              >
                {"Privacy & Policy"}
              </div>
            </Button>
          </div>
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__wJth)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__c35Mh
          )}
        >
          {"Copyrights \u00a9 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "logo"],
  columns: ["columns", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */