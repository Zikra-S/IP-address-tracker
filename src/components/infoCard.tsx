interface InfoCardProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

export function InfoCard({ ip, location, timezone, isp }: InfoCardProps) {
  const items = [
    { label: "IP Address", value: ip },
    { label: "Location", value: location },
    { label: "Timezone", value: `UTC ${timezone}` },
    { label: "ISP", value: isp },
  ];

  return (
    <dl className="grid w-full max-w-sm gap-4 rounded-2xl bg-white p-6 text-center shadow-lg md:max-w-6xl md:grid-cols-4 md:gap-0 md:p-8 md:text-left">
      {items.map((item) => (
        <div key={item.label} className="md:border-l md:border-neutral-200 md:px-8 md:first:border-l-0 md:first:pl-0">
          <dt className="text-dark-gray text-[11px] font-bold tracking-[0.2em] uppercase md:text-xs">{item.label}</dt>
          <dd className="text-very-dark-gray mt-1 text-xl font-medium wrap-break-word md:mt-2 md:text-2xl">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
