import Button from "../components/Button";
import {GoBell, GoCloudOffline, GoDatabase} from 'react-icons/go';

function ButtonPage() {

    return <div>
        <div>
            <Button primary rounded outline>
                <GoCloudOffline/>
                First
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoDatabase/>
                Second
            </Button>
        </div>
        <div>
            <Button secondary>
                <GoBell/>
                Third
            </Button>
        </div>
        <div>
            <Button success>Fourth</Button>
        </div>
        <div>
            <Button warning outline>Fifth</Button>
        </div>
        <div>
            <Button danger rounded>Sixth</Button>
        </div>
    </div>;
}

export default ButtonPage;