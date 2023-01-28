import { ResponsiveBar } from '@nivo/bar'

const Bar = ({ data, stat1, subtitle1, stat2, subtitle2, isReverse = false }) => {
    const foreground = isReverse ? '#E3DDD1' : '#63576E' 
    const background = isReverse ? '#63576E' : '#E3DDD1'

    return <div style={{ width: '100%', height: 150, position: 'relative' }}>
        <ResponsiveBar
            data={data}
            keys={[
                'Donne',
                'Uomini'
            ]}
            indexBy="country"
            margin={{ top: 50, bottom: 0 }}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={[background, foreground]}
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            axisBottom={null}
            label={null}
            role="application"
        />
        <div className='flex justify-between text-left'>
            <div>
                <h2 className='font-sans text-4xl'>{stat1}</h2>
                <p>{subtitle1}</p>
            </div>
            <div>
            <h2 className='font-sans text-4xl text-right'>{stat2}</h2>
                <p>{subtitle2}</p>
            </div>
        </div>
    </div>
}

export default Bar