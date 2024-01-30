import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.'
    }),
    quantity: z.number().min(1, {
        message: 'Quantity must be at least 1.'
    }),
    unit: z.string().min(1, {
        message: 'Unit must be at least 1 character.'
    }),
    dailyGoal: z.number().min(1, {
        message: 'Daily goal must be at least 1.'
    }),
    emoji: z
        .string()
        .min(1, {
            message: 'Emoji must be at least 1 character.'
        })
        .max(1, {
            message: 'Emoji must be at most 1 character.'
        }),
    timed: z.boolean()
});

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
}

export function CreateDidgYaDialogForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        }
    });
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="flex-no-wrap flex w-full max-w-md cursor-pointer flex-row items-center justify-between gap-4 rounded-full bg-supporting-light py-1.5 pl-3 pr-1.5 text-3xl text-white hover:bg-supporting-light/80 dark:bg-supporting-dark hover:dark:bg-supporting-dark/80"
                    key={'create-didgya'}
                    // onClick={() => createDidgYa(user.user.id)}
                >
                    <div className="shrink grow-0 cursor-pointer rounded-md p-1 text-2xl opacity-0">
                        🤷
                    </div>
                    <div className="shrink-0 grow text-left text-xl">
                        Create DidgYa
                    </div>
                    <div className="flex flex-row items-center gap-2"></div>
                    <span
                        id="play-button"
                        className="mr-3 w-6 cursor-pointer text-highlight-light dark:text-highlight-dark"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-neutral-light dark:bg-neutral-dark rounded-xl p-8">
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        Create DidgYa
                    </DialogTitle>
                    <DialogDescription>Create a new DidgYa.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <span className="text-base">Name</span>
                                    </FormLabel>
                                    <FormDescription>
                                        <span className="text-text-light/60 dark:text-text-dark/60">
                                            The name of your DidgYa.
                                        </span>
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="Water" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <span className="text-base">
                                            Quantity
                                        </span>
                                    </FormLabel>
                                    <FormDescription>
                                        <span className="text-text-light/60 dark:text-text-dark/60">
                                            The amount of the DidgYa. E.G. for
                                            water, 250, then set <i>Unit</i> to
                                            ml (milliliter).
                                        </span>
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="250" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="unit"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <span className="text-base">Unit</span>
                                    </FormLabel>
                                    <FormDescription>
                                        <span className="text-text-light/60 dark:text-text-dark/60">
                                            The unit that is applied to{' '}
                                            <i>Quantity</i>.
                                        </span>
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="ml" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dailyGoal"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <span className="text-base">
                                            Daily Goal
                                        </span>
                                    </FormLabel>
                                    <FormDescription>
                                        <span className="text-text-light/60 dark:text-text-dark/60">
                                            The number of times you want to do
                                            this DidgYa per day.
                                        </span>
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="15" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="emoji"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <span className="text-base">Emoji</span>
                                    </FormLabel>
                                    <FormDescription>
                                        <span className="text-text-light/60 dark:text-text-dark/60">
                                            The emoji that will be used to
                                            represent this DidgYa.
                                        </span>
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="🤷🏽" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="timed"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <span className="text-base">
                                            Timed Mode
                                        </span>
                                    </FormLabel>
                                    <FormDescription>
                                        <span className="text-text-light/60 dark:text-text-dark/60">
                                            Do you want to log the duration
                                            performed for this DidgYa?
                                        </span>
                                    </FormDescription>
                                    <FormControl>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="timed" {...field} />
                                            <Label htmlFor="timed">
                                                Timed Mode
                                            </Label>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="sm:justify-start flex flex-row w-full gap-2">
                            <Button
                                type="submit"
                                className="bg-secondary-light font-semibold dark:bg-secondary-dark hover:bg-secondary-light/70 hover:dark:bg-secondary-dark/70 w-full"
                            >
                                <span
                                    id="play-button"
                                    className="mr-2 w-6 cursor-pointer text-highlight-light dark:text-highlight-dark"
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Create DidgYa
                            </Button>
                            <DialogClose asChild>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="bg-accent-light font-semibold dark:bg-accent-dark hover:bg-accent-light/70 hover:dark:bg-accent-dark/70 w-full"
                                >
                                    <span
                                        id="play-button"
                                        className="mr-2 w-6 cursor-pointer text-highlight-light dark:text-highlight-dark"
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </span>
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
