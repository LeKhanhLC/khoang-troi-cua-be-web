/* eslint-disable @next/next/no-img-element */

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  banner_url: string;
  description: string;
  slug: string;
  hideBorder?: boolean;
}

export const ItemNews: React.FC<Props> = ({
  title,
  banner_url,
  description,
  slug,
  hideBorder,
}) => {
  return (
    <Stack
      sx={{
        ...(!hideBorder && {
          borderBottom: "1px solid #e0e0e0",
          marginBottom: "12px",
          paddingBottom: "20px",
        }),
      }}
    >
      <Link href={`/news/${slug}`}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "15px",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          {title}
        </Typography>
      </Link>

      <Box>
        <Box
          sx={{
            width: "145px",
            float: "left",
            marginRight: "10px",
            marginTop: "4px",
          }}
        >
          <Link
            href={`/news/${slug}`}
            style={{
              display: "block",
              overflow: "hidden",
              height: "0",
              position: "relative",
              width: "100%",
              background: "#f4f4f4",

              paddingBottom: "60%",
            }}
          >
            <Image
              width={145}
              height={87}
              alt="banner_url"
              src={banner_url}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                height: "100%",
              }}
            />
          </Link>
        </Box>

        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "140%",
            color: "#4f4f4f",
          }}
        >
          <Link href={`/news/${slug}`}>{description}</Link>
        </Typography>
      </Box>
    </Stack>
  );
};
