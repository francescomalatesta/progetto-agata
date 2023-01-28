import { ResponsiveBar } from '@nivo/bar'

const Bar = ({ data, isReverse = false }) => {
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
            margin={{ top: 50, right: 130, bottom: 0, left: 60 }}
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
            barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
        />
        <div className='flex justify-between ml-16 mr-36 text-left'>
            <div>
                <h2 className='font-sans text-4xl'>60%</h2>
                <p>dei laureati è donna</p>
            </div>
            <div>
            <h2 className='font-sans text-4xl text-right'>40%</h2>
                <p>dei laureati è uomo</p>
            </div>
        </div>
    </div>
}

export default Bar