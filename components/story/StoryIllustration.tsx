import type { CSSProperties } from "react";

export type StoryScene = "hero" | "qa" | "shift" | "practice" | "milestone" | "today" | "closing";

const labels: Record<StoryScene, string> = {
  hero: "A designer sketching an interface while keeping an eye out for bugs",
  qa: "A quality assurance checklist, test window, and magnifying glass",
  shift: "A rough sketch turning into a structured interface",
  practice: "Design drafts and iterations arranged around a workspace",
  milestone: "A certificate surrounded by interface sketches",
  today: "A designer shaping a mobile and web interface",
  closing: "A designer closing a laptop beside a finished sketchbook",
};

function Character({ x = 300, y = 194, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className="story-illustration__character">
      <path className="story-illustration__ink-fill" d="M-47 145c2-45 16-67 48-67s49 21 51 67H-47Z" />
      <path className="story-illustration__accent-fill" d="M-17 82 1 105l17-23 7 12-14 22h-18L-32 94l15-12Z" />
      <path className="story-illustration__paper-fill" d="M-31-9c1-31 16-47 37-44 20 2 32 18 29 46-2 28-16 44-37 43-21-2-31-19-29-45Z" />
      <path className="story-illustration__ink-stroke" d="M-33-14c-5-31 8-55 31-57 24-3 43 12 43 40-10-9-15-17-17-28-9 18-31 29-57 30" />
      <path className="story-illustration__ink-stroke" d="M-15-7h1m20 0h1m-15 17c6 4 13 4 18 0" strokeLinecap="round" />
      <path className="story-illustration__ink-stroke" d="M-40 101c-16 7-28 19-36 34m116-37c18 6 28 19 33 34" strokeLinecap="round" />
      <path className="story-illustration__line" d="m-33 100 19 22m31-22-18 22" />
    </g>
  );
}

function Spark({ x, y, size = 12 }: { x: number; y: number; size?: number }) {
  return <path className="story-illustration__orange-stroke" d={`M${x} ${y - size}l${size * 0.25} ${size * 0.7} ${size * 0.75} ${size * 0.3} -${size * 0.75} ${size * 0.3} -${size * 0.25} ${size * 0.7} -${size * 0.25} -${size * 0.7} -${size * 0.75} -${size * 0.3} ${size * 0.75} -${size * 0.3}Z`} />;
}

export function StoryIllustration({ scene, className = "" }: { scene: StoryScene; className?: string }) {
  const style = { "--scene-index": ["hero", "qa", "shift", "practice", "milestone", "today", "closing"].indexOf(scene) } as CSSProperties;

  return (
    <svg className={`story-illustration story-illustration--${scene} ${className}`} style={style} viewBox="0 0 500 360" role="img" aria-label={labels[scene]} focusable="false">
      <rect className="story-illustration__canvas" x="1" y="1" width="498" height="358" rx="5" />
      <path className="story-illustration__orbit" d="M31 282c-22-89 12-190 112-227 87-33 183-16 266 40 63 42 94 112 72 178-28 80-139 90-243 72-105-17-186 9-207-63Z" />
      <path className="story-illustration__floor" d="M34 300h432" />
      {scene === "hero" && (
        <>
          <rect className="story-illustration__card" x="44" y="65" width="143" height="153" rx="7" />
          <path className="story-illustration__line" d="M58 91h94M58 107h65M58 140h93M58 155h79M58 190h50" />
          <circle className="story-illustration__orange-fill" cx="166" cy="101" r="5" />
          <path className="story-illustration__orange-stroke" d="m70 176 8 8 17-20" />
          <rect className="story-illustration__card" x="322" y="49" width="131" height="72" rx="6" />
          <path className="story-illustration__line" d="M337 72h93m-93 13h70m-70 13h54" />
          <rect className="story-illustration__accent-fill" x="370" y="100" width="51" height="9" rx="4" />
          <Character x={264} y={190} scale={0.94} />
          <path className="story-illustration__ink-stroke" d="M211 271h110l15 19H196l15-19Zm19 19-5 8m65-8 5 8" />
          <rect className="story-illustration__card" x="226" y="249" width="72" height="24" rx="3" />
          <path className="story-illustration__line" d="M236 258h52m-52 7h34" />
          <Spark x={425} y={157} size={14} /><Spark x={84} y={251} size={10} />
          <g className="story-illustration__bug" transform="translate(417 230)"><circle cx="0" cy="0" r="9" /><path d="M0-13v-5M-10-7l-6-5m26 5 6-5M-13 1h-6m32 0h6M-9 9l-5 6m23-6 5 6" /></g>
        </>
      )}
      {scene === "qa" && (
        <>
          <rect className="story-illustration__card" x="38" y="62" width="185" height="182" rx="6" />
          <path className="story-illustration__ink-stroke" d="M38 84h185" />
          <circle className="story-illustration__orange-fill" cx="53" cy="73" r="3" /><circle className="story-illustration__line-fill" cx="64" cy="73" r="3" />
          <path className="story-illustration__line" d="M58 105h120m-120 43h120m-120 43h120" />
          <rect className="story-illustration__accent-fill" x="58" y="115" width="14" height="14" rx="3" /><path className="story-illustration__paper-stroke" d="m61 122 3 3 6-7" />
          <rect className="story-illustration__paper-fill story-illustration__thin-stroke" x="58" y="158" width="14" height="14" rx="3" />
          <rect className="story-illustration__accent-fill" x="58" y="201" width="14" height="14" rx="3" /><path className="story-illustration__paper-stroke" d="m61 208 3 3 6-7" />
          <Character x={330} y={199} scale={0.97} />
          <path className="story-illustration__ink-stroke" d="M264 280h124l15 17H249l15-17Z" />
          <rect className="story-illustration__card" x="284" y="254" width="88" height="27" rx="3" /><path className="story-illustration__line" d="M297 263h62m-62 7h38" />
          <circle className="story-illustration__paper-fill story-illustration__orange-stroke" cx="218" cy="217" r="30" /><path className="story-illustration__orange-stroke" d="m239 238 23 24" />
          <g className="story-illustration__bug" transform="translate(441 105)"><circle cx="0" cy="0" r="9" /><path d="M0-13v-5M-10-7l-6-5m26 5 6-5M-13 1h-6m32 0h6M-9 9l-5 6m23-6 5 6" /></g>
          <Spark x={404} y={246} size={10} />
        </>
      )}
      {scene === "shift" && (
        <>
          <rect className="story-illustration__card" x="42" y="77" width="125" height="164" rx="6" />
          <path className="story-illustration__line" d="M57 103h94M57 126h38m-38 14h82m-82 14h65m-65 20h82m-82 15h47" />
          <path className="story-illustration__orange-stroke" d="m72 218 17-17 11 10 20-27 17 13" />
          <path className="story-illustration__arrow" d="M179 155h58m-16-12 16 12-16 12" />
          <Character x={311} y={199} scale={0.91} />
          <rect className="story-illustration__card" x="368" y="69" width="98" height="151" rx="6" />
          <path className="story-illustration__accent-fill" d="M381 88h71v15h-71z" />
          <path className="story-illustration__line" d="M381 116h71m-71 13h38m-38 26h71m-71 13h51m-51 26h71" />
          <rect className="story-illustration__paper-fill story-illustration__orange-stroke" x="381" y="178" width="24" height="24" rx="4" />
          <rect className="story-illustration__paper-fill story-illustration__thin-stroke" x="411" y="178" width="41" height="24" rx="4" />
          <path className="story-illustration__line" d="m193 94 13-13 13 13m-13-13v28" />
          <Spark x={265} y={88} size={12} /><Spark x={442} y={251} size={9} />
        </>
      )}
      {scene === "practice" && (
        <>
          <rect className="story-illustration__card" x="37" y="80" width="118" height="117" rx="5" />
          <path className="story-illustration__line" d="M51 99h89m-89 13h70m-70 14h78m-78 14h49" />
          <path className="story-illustration__orange-stroke" d="m53 174 21-18 17 9 23-25 25 9" />
          <Character x={260} y={195} scale={0.97} />
          <rect className="story-illustration__card" x="338" y="55" width="129" height="97" rx="5" />
          <path className="story-illustration__line" d="M351 74h90m-90 13h56m-56 14h90" />
          <path className="story-illustration__orange-stroke" d="m352 135 18-14 18 8 19-19 26 13" />
          <rect className="story-illustration__card story-illustration__draft" x="357" y="171" width="103" height="76" rx="5" />
          <path className="story-illustration__line" d="M370 187h75m-75 13h44m-44 14h75" />
          <rect className="story-illustration__accent-fill" x="370" y="225" width="38" height="10" rx="4" />
          <path className="story-illustration__ink-stroke" d="M212 269h100l15 17H197l15-17Z" />
          <rect className="story-illustration__card" x="229" y="249" width="68" height="21" rx="3" />
          <path className="story-illustration__line" d="M240 257h45m-45 6h28" />
          <Spark x={185} y={80} size={11} /><Spark x={437} y={275} size={9} />
        </>
      )}
      {scene === "milestone" && (
        <>
          <path className="story-illustration__orbit" d="M86 243c-15-43 2-114 54-143" />
          <rect className="story-illustration__card story-illustration__certificate" x="52" y="74" width="173" height="147" rx="6" />
          <path className="story-illustration__accent-fill" d="M70 91h137v14H70z" />
          <path className="story-illustration__line" d="M71 122h103m-103 17h128m-128 17h110m-110 24h82" />
          <circle className="story-illustration__paper-fill story-illustration__orange-stroke" cx="185" cy="194" r="13" />
          <path className="story-illustration__orange-stroke" d="m178 205-3 22 10-6 10 6-3-22" />
          <Character x={335} y={201} scale={0.96} />
          <rect className="story-illustration__card" x="279" y="256" width="108" height="25" rx="4" /><path className="story-illustration__line" d="M292 265h79m-79 7h41" />
          <Spark x={267} y={78} size={14} /><Spark x={442} y={165} size={9} />
          <path className="story-illustration__orange-stroke" d="m410 72 8 8m-13 5 8 1m17 9-1 9" />
        </>
      )}
      {scene === "today" && (
        <>
          <rect className="story-illustration__card" x="38" y="63" width="171" height="182" rx="6" />
          <path className="story-illustration__accent-fill" d="M52 78h143v18H52z" />
          <path className="story-illustration__line" d="M56 112h118m-118 13h76m-76 19h118m-118 13h89" />
          <rect className="story-illustration__paper-fill story-illustration__thin-stroke" x="56" y="177" width="47" height="49" rx="4" />
          <rect className="story-illustration__paper-fill story-illustration__thin-stroke" x="111" y="177" width="83" height="49" rx="4" />
          <path className="story-illustration__orange-stroke" d="M68 213v-19m12 19v-28m12 28v-13m30 1 13-11 12 8 17-19" />
          <Character x={332} y={199} scale={0.98} />
          <path className="story-illustration__ink-stroke" d="M268 270h114l14 18H252l16-18Z" />
          <rect className="story-illustration__card" x="282" y="248" width="84" height="23" rx="3" />
          <path className="story-illustration__line" d="M294 257h59m-59 7h42" />
          <Spark x={427} y={74} size={13} />
        </>
      )}
      {scene === "closing" && (
        <>
          <rect className="story-illustration__card" x="52" y="92" width="133" height="140" rx="6" />
          <path className="story-illustration__line" d="M68 112h88m-88 21h88m-88 19h63" />
          <path className="story-illustration__orange-stroke" d="m72 196 20-19 16 10 18-24 25 15" />
          <Character x={313} y={196} scale={0.95} />
          <path className="story-illustration__ink-stroke" d="M263 270h105l16 20H247l16-20Zm19-9h66l10 9h-86l10-9Z" />
          <Spark x={235} y={73} size={14} /><Spark x={423} y={119} size={10} />
          <path className="story-illustration__orange-stroke" d="m408 224 15 15m0-15-15 15" />
          <path className="story-illustration__arrow" d="M197 106h34m-12-11 12 11-12 11" />
        </>
      )}
    </svg>
  );
}
