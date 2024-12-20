// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2yfd7ES8pk9cfEjyQyPEpr
// Component: MNzUCmEot2Mb

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

import Button from "../../Button"; // plasmic-import: -iZ-8DLVp5gH/component

import { useScreenVariants as useScreenVariantsmmwFkRdGmRwd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mmwFkRdGmRWD/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 2yfd7ES8pk9cfEjyQyPEpr/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: MNzUCmEot2Mb/css

createPlasmicElementProxy;

export type PlasmicPriceCard__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight" | "flatCenter";
};
export type PlasmicPriceCard__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
};
type VariantPropType = keyof PlasmicPriceCard__VariantsArgs;
export const PlasmicPriceCard__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard__ArgsType = {};
type ArgPropType = keyof PlasmicPriceCard__ArgsType;
export const PlasmicPriceCard__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceCard__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  h4?: Flex__<"h4">;
  button?: Flex__<typeof Button>;
};

export interface DefaultPriceCardProps {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPriceCard__RenderFunc(props: {
  variants: PlasmicPriceCard__VariantsArgs;
  args: PlasmicPriceCard__ArgsType;
  overrides: PlasmicPriceCard__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.primary
      },
      {
        path: "borders",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.borders
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
        sty.root,
        {
          [sty.rootborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.freeBoxborders_flatLeft]: hasVariant(
            $state,
            "borders",
            "flatLeft"
          ),
          [sty.freeBoxborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.freeBoxprimary]: hasVariant($state, "primary", "primary")
        })}
      >
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4,
            {
              [sty.h4borders_flatCenter]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.h4borders_flatLeft]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.h4borders_flatRight]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Enterprise"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free"
            : "Pro"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gKGiB,
            {
              [sty.textborders_flatCenter__gKGiBhlwCy]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__gKGiB4BSl6]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__gKGiBxYpMm]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.textprimary__gKGiByxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Flexible power and security"
            : hasVariant($state, "borders", "flatLeft")
            ? "A complete analytics platform."
            : "A complete analytics platform."}
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___650Vs)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/dark_saa_s_landing_page/images/linePricingPng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(projectcss.all, sty.columns___4IzfX, {
            [sty.columnsprimary___4IzfXyxf2Q]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column___6LBdr)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__fstzx, {
                [sty.imgborders_flatLeft__fstzx4BSl6]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column___3GdNd, {
              [sty.columnborders_flatRight___3GdNdXYpMm]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iT4Ad,
                {
                  [sty.textborders_flatLeft__iT4Ad4BSl6]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__iT4AdXYpMm]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__iT4Adyxf2Q]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Everything in pro"
                : hasVariant($state, "borders", "flatLeft")
                ? "1 Product"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__zsNup, {
            [sty.columnsborders_flatCenter__zsNuphlwCy]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__zsNup4BSl6]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsborders_flatRight__zsNupXYpMm]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.columnsprimary__zsNupyxf2Q]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__cpJsM)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__kAgUz, {
                [sty.imgborders_flatLeft__kAgUz4BSl6]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div className={classNames(projectcss.all, sty.column___3HD5I)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gnC9J,
                {
                  [sty.textborders_flatCenter__gnC9JhlwCy]: hasVariant(
                    $state,
                    "borders",
                    "flatCenter"
                  ),
                  [sty.textborders_flatLeft__gnC9J4BSl6]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__gnC9JXYpMm]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__gnC9Jyxf2Q]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Volume discount"
                : hasVariant($state, "borders", "flatLeft")
                ? "Analytics board"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__rPdJw, {
            [sty.columnsborders_flatCenter__rPdJwhlwCy]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__rPdJw4BSl6]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsprimary__rPdJwyxf2Q]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__mRv6Q)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__zct1B, {
                [sty.imgborders_flatLeft__zct1B4BSl6]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column__q5Io, {
              [sty.columnborders_flatLeft__q5Io4BSl6]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__q5IoxYpMm]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__q5IOyxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__knVj5,
                {
                  [sty.textborders_flatLeft__knVj54BSl6]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textprimary__knVj5Yxf2Q]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatLeft")
                ? "Insights panel"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.column__bo4, {
              [sty.columnborders_flatLeft__bo44BSl6]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__bo4XYpMm]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__bo4Yxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          />
        </div>
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns___3DF1, {
              [sty.columnsborders_flatCenter___3DF1HlwCy]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft___3DF14BSl6]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsprimary___3DF1Yxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__kkzip)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__ebPqC, {
                  [sty.imgborders_flatLeft__ebPqC4BSl6]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitePng.png",
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__hFlcf)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zibdS,
                  {
                    [sty.textborders_flatLeft__zibdS4BSl6]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textprimary__zibdSyxf2Q]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatLeft")
                  ? "CLI access"
                  : hasVariant($state, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__cztJi, {
              [sty.columnsborders_flatCenter__cztJIhlwCy]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__cztJIyxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__ldDc7)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__lPsxk)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__idHxP)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aOhHo,
                  {
                    [sty.textborders_flatCenter__aOhHohlwCy]: hasVariant(
                      $state,
                      "borders",
                      "flatCenter"
                    ),
                    [sty.textprimary__aOhHoyxf2Q]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Insights panel"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__o9Vd7, {
              [sty.columnsborders_flatCenter__o9Vd7HlwCy]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__o9Vd7Yxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__gxHx)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__yArn8)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "16px"
                    : "24px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__a6IZs)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lwtT2,
                  {
                    [sty.textprimary__lwtT2Yxf2Q]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"CLI access"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__zTjfL, {
              [sty.columnsborders_flatCenter__zTjfLhlwCy]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__zTjfLyxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__bwPDp)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__swZ1R)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__tQdG)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dvQo8,
                  {
                    [sty.textprimary__dvQo8Yxf2Q]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Automation features"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__bhyMg, {
              [sty.columnsborders_flatCenter__bhyMGhlwCy]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__bhyMGyxf2Q]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__lEmf)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___4S7MB)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__xDaOf)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0IRiw,
                  {
                    [sty.textprimary___0IRiWyxf2Q]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Team features"}
              </div>
            </div>
          </div>
        ) : null}
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__ntwD)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/dark_saa_s_landing_page/images/linePricingPng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatRight")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : false
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__js9Ns,
              {
                [sty.textborders_flatCenter__js9NshlwCy]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__js9Ns4BSl6]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__js9NsXYpMm]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "$ 50"
              : hasVariant($state, "borders", "flatRight")
              ? "$ 800"
              : "$ 0"}
          </div>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mFhf5,
            {
              [sty.textborders_flatCenter__mFhf5HlwCy]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__mFhf54BSl6]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__mFhf5XYpMm]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Starting price, customizable"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free Forever"
            : "per project/month"}
        </div>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.buttonborders_flatCenter]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.buttonborders_flatLeft]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.buttonborders_flatRight]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.buttonprimary]: hasVariant($state, "primary", "primary")
          })}
          color={hasVariant($state, "borders", "flatLeft") ? "white" : "blue"}
          endIcon={
            <svg
              className={classNames(projectcss.all, sty.svg___6WnCf)}
              role={"img"}
            />
          }
          link={"#"}
          startIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__i5PjW)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__j6TEp,
              {
                [sty.textborders_flatCenter__j6TEPhlwCy]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__j6TEp4BSl6]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__j6TEpxYpMm]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "Go Become pro"
              : hasVariant($state, "borders", "flatRight")
              ? "Everything is yours"
              : hasVariant($state, "borders", "flatLeft")
              ? "Claim Free"
              : "Go Become pro"}
          </div>
        </Button>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h4", "button"],
  freeBox: ["freeBox", "h4", "button"],
  h4: ["h4"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h4: "h4";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard__VariantsArgs;
    args?: PlasmicPriceCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPriceCard__ArgsType,
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
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
