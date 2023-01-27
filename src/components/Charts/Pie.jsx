import { ResponsivePie } from '@nivo/pie'

const Pie = ({ data, isReverse = false }) => {
    const foreground = isReverse ? '#63576E' : '#63576E'
    const background = isReverse ? '#342741' : '#ECE8E2'


    return <div style={{ width: '100%', height: 500, position: 'relative' }}>
        <div style={{ width: '100%', marginTop: '140px', fontSize: '74px', position: 'absolute', textAlign: 'center' }}>200</div>
        <div style={{ width: '100%', marginTop: '240px', fontSize: '28px', position: 'absolute', textAlign: 'center' }}>su 1000 giovani</div>
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