import { Image } from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faCloud } from '@fortawesome/free-solid-svg-icons'

import LocallyStoredIcon from '@/assets/icons/LocallyStoredIcon.tsx'

const DidgYaListItem = ({
    id,
    createdAt,
    updatedAt,
    userId,
    name,
    unit,
    quantity,
    inputs,
    timed,
    unitType,
    emoji,
    records,
    active,
    timedInstances,
    location
}) => {
    return (
        <div className="flex flex-row gap-4 pl-3 pr-1.5 py-1.5 bg-cyan-950 items-center justify-between text-3xl flex-no-wrap max-w-md w-full text-white" key={id}>
            <div className="text-2xl cursor-pointer hover:bg-cyan-900 rounded-md p-1">{ emoji }</div>
                <div className="grow shrink-0 text-left justify-start mr-auto flex flex-col gap-px items-left cursor-pointer  hover:bg-cyan-900 rounded-md pl-2">
                <div className="flex flex-row gap-1 items-center justify-start">
                    <span className="text-base">{ name }</span>
                    <span className="text-2xs">{ (quantity === 0) ? "" : `(${quantity} ${unit})`}</span>
                </div>
                <div className="text-xs">0 times today</div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <span id="play-button" className=" w-6 text-blue-400 cursor-pointer hover:text-blue-500">
                    <FontAwesomeIcon icon={faStop} />
                </span>
                <span id="stop-button" className="w-6 text-green-400 cursor-pointer hover:text-green-500">
                <FontAwesomeIcon icon={faPlay} />
                </span>
            </div>
            <div className="w-3 text-xs self-start justify-start">
                {
                    (location === 'cloud') ?
                    <FontAwesomeIcon className='text-blue-300' icon={faCloud} /> :
                    <LocallyStoredIcon className="fill-orange-300" height="12" width="12" />
                }
            </div>
        </div>
    );
};

export default DidgYaListItem;