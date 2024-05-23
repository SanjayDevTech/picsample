import JSZip from "jszip";
import { z } from "zod";

const NumberSchema =  z.string().transform(Number);
const DimensionSchema =  NumberSchema.pipe(z.number().min(1));

const DownloadParamsSchema = z.object({
  count: NumberSchema.pipe(z.number().min(1).max(500)),
  width: DimensionSchema,
  height: DimensionSchema,
  type: z.enum(["jpg", "webp"]),
});

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const { count, width, height, type } = DownloadParamsSchema.parse(Object.fromEntries(params));
  const promises = Array(count).fill(0).map((_, index) => fetch(`https://picsum.photos/${width}/${height}.${type}?seed=${index}`).then(res => res.blob()).then(res => res.arrayBuffer()));
  const results = await Promise.all(promises);
  const zip = new JSZip();
  results.forEach((v, index) => {
    zip.file(`sample_${index}.${type}`, Buffer.from(v));
  });
  return new Response(await zip.generateAsync({ type: 'nodebuffer' }))
}
