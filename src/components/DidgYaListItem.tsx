import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faCloud } from '@fortawesome/free-solid-svg-icons'

import LocallyStoredIcon from '@/assets/icons/LocallyStoredIcon'

interface Select {
    id: number;
    value: string;
    name: string;
    description: string;
}

interface Input {
    id: number;
    name: string;
    type: string;
    selects: Select[];
}

interface Variable {
    id: number;
    name: string;
    value: string;
}

interface Record {
    id: number;
    dt: Date;
    variables: Variable[];
}

interface TimedInstance {
    id: number;
    start: Date;
    end: Date;
}

interface Props {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    name: string;
    unit: string;
    quantity: number;
    inputs?: Input[];
    timed: boolean;
    unitType: string;
    emoji: string;
    records?: Record[];
    active: boolean;
    timedInstances?: TimedInstance[];
    location: string;
}

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
}: Props ) => {
    return (
        <div className="flex flex-row gap-4 pl-3 pr-1.5 py-1.5 bg-neutral-light dark:bg-neutral-dark items-center justify-between text-3xl flex-no-wrap max-w-md w-full text-white" key={id}>
            <div className="text-2xl cursor-pointer rounded-md p-1 hover:bg-highlight-light/10 hover:dark:bg-highlight-dark/10">
                { emoji }
            </div>
            <div className="text-text-light dark:text-text-dark grow shrink-0 text-left justify-start mr-auto flex flex-col gap-px items-left cursor-pointer rounded-md pl-2 hover:bg-highlight-light/10 hover:dark:bg-highlight-dark/10">
                <div className="flex flex-row gap-1 items-center justify-start">
                    <span className="text-base">{ name }</span>
                    <span className="text-2xs">{ (quantity === 0) ? "" : `(${quantity} ${unit})`}</span>
                </div>
                <div className="text-xs">0 times today</div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <span id="play-button" className="hidden w-6 text-secondary-light dark:text-secondary-dark cursor-pointer hover:text-secondary-light/60 hover:dark:text-secondary-dark/60">
                    <FontAwesomeIcon icon={faStop} />
                </span>
                <span id="stop-button" className="w-6 text-primary-light dark:text-primary-dark mr-3 cursor-pointer hover:text-primary-light/60 hover:dark:text-primary-dark/60">
                    <FontAwesomeIcon icon={faPlay} />
                </span>
            </div>
            {/* <div className="w-3 text-xs self-start justify-start">
                {
                    (location === 'cloud') ?
                    <FontAwesomeIcon className='text-blue-300' icon={faCloud} /> :
                    <LocallyStoredIcon className="fill-orange-300" height="12" width="12" />
                }
            </div> */}
        </div>
    );
};

export default DidgYaListItem;