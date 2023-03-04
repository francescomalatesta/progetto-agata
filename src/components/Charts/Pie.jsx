import { ResponsivePie } from '@nivo/pie'

const Pie = ({ data, stat, subtitle, isReverse = false }) => {
    const foreground = isReverse ? '#63576E' : '#63576E'
    const background = isReverse ? '#342741' : '#ECE8E2'

    return <div style={{ width: '100%', height: 500, position: 'relative' }}>
        <div style={{ width: '100%', marginTop: '140px', fontSize: '74px', position: 'absolute', textAlign: 'center' }}>{stat}</div>
        <div style={{ width: '100%', marginTop: '240px', fontSize: '28px', position: 'absolute', textAlign: 'center' }}>{subtitle}</div>
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.8}
            padAngle={1}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={background}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            tooltip={(e) => {
                return <div style={{
                    backgroundColor: foreground,
                    padding: "9px 12px",
                    border: "1px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: isReverse ? 'white' : background,
                }}>
                    {e.datum.label}:{" "}
                    {e.datum.value
                        ? e.datum.value
                        : "No data"}
                </div>
            }}
            colors={[foreground, background]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 10,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: background,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle'
                }
            ]}
        />
    </div>
}

export default Pie